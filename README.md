# Polka Sign In OAuth2 Server

An OAuth2 server designed to allow websites / apps to easily allow their users to authenticate using their Polkadot account.

The only supported OAuth grant type is the [Authorization code flow (with PCKE)](https://oauth.net/2/grant-types/authorization-code/)

## How to integrate with the Litentry hosted Polka Sign OAuth2 server

- Create a client set the name and redirect uris in the request below

```shell
curl --location --request POST 'https://polkasignin.litentry.io/client' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=My Amazing App' \
--data-urlencode 'redirectUris[0]=https://oauth.pstmn.io/v1/callback'
```

- Configure your Oauth2 client library with the following

```json
{
  "clientId": "<Provided by step above>",
  "authUrl": "https://polkasignin.litentry.io/authorise",
  "tokenUrl": "https://polkasignin.litentry.io/token"
}
```

- Make a coffee to celebrate

## API re
