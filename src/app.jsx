import * as polkaSignInClient from "@litentry/polkasignin-client";

const contentWrapper = (container) => {
  const setContent = (content, className) => {
    container.className = className;
    container.innerHTML = "";

    let el = content;
    if (typeof content === "string") {
      el = document.createElement("span");
      el.innerHTML = content;
    }
    container.appendChild(el);
  };

  return { setContent };
};

const getAccounts = (container, clientName) =>
  new Promise(async (resolve) => {
    const attemptInjectAccounts = async (firstAttempt) => {
      try {
        resolve(await polkaSignInClient.injectAccounts(clientName));
      } catch (e) {
        if (firstAttempt) {
          container.setContent(
            '<p>To sign in using Polkadot you must first install the Polkadot{.js} extension</p><a href="https://polkadot.js.org/extension/" class="button">Get the Polkadot{.js} extension</a>',
            "install"
          );
        }
        setTimeout(attemptInjectAccounts, 1000);
      }
    };
    attemptInjectAccounts(true);
  });

const askUserToSelectAnAccount = (container, accounts) =>
  new Promise((resolve) => {
    const accountSelectionContainerEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    titleEl.innerHTML = "Select an account";
    accountSelectionContainerEl.appendChild(titleEl);

    for (const account of accounts) {
      const accountEl = document.createElement("button");
      accountEl.innerText = account.meta.name;
      accountEl.onclick = () => resolve(account);
      accountSelectionContainerEl.appendChild(accountEl);
    }

    container.setContent(accountSelectionContainerEl);
  });

const addToForm = (form, data) => {
  for (let [name, value] of Object.entries(data)) {
    const el = document.createElement("input");
    el.value = value;
    el.name = name;
    form.appendChild(el);
  }

  return form;
};

const submitAuth = (address, challenge, signedChallenge) => {
  const form = document.createElement("form");
  form.action = `/login${window.location.search}`;
  form.method = "post";
  document.body.appendChild(form);
  addToForm(form, { address, challenge, signedChallenge }).submit();
};

window.polkaSignIn = async (containerEl, clientName, challenge) => {
  const container = contentWrapper(containerEl);
  try {
    container.setContent("Loading...", "loading");
    const accounts = await getAccounts(container, clientName);
    const account =
      accounts.length === 1
        ? accounts[0]
        : await askUserToSelectAnAccount(container, accounts);
    const signedChallenge = await polkaSignInClient.signChallenge(
      account,
      challenge
    );
    submitAuth(account.address, challenge, signedChallenge);
  } catch (e) {
    console.log(e);
    container.setContent(
      "<h2>Error</h2> <p>Unexpected error occurred</p>",
      "error"
    );
    setTimeout(() => {
      const returnLocation = new URLSearchParams(window.location.search).get(
        "redirect_uri"
      );
      const separator = returnLocation.includes("?") ? "&" : "?";
      window.location = returnLocation + separator + "error=1";
    }, 2000);
  }
};
