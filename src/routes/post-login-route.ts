import {Application, Request, Response} from "express";
import {
  handleExpressError,
  handleExpressResponse,
  requestFromExpress
} from "@jmondi/oauth2-server/dist/adapters/express";
import {AuthorizationServer} from "@jmondi/oauth2-server";
import signIn from "@litentry/polkasignin-server";
import {ChallengeRepository} from "../repositories/challenge-repository";

export default (
  app: Application,
  authorizationServer: AuthorizationServer,
  challengeRepository: ChallengeRepository
) => app.post("/login", async (req: Request, res: Response) => {

  try {
    // Validate the HTTP request and return an AuthorizationRequest object.
    const authRequest = await authorizationServer.validateAuthorizationRequest(requestFromExpress(req));

    const {address, challenge: challengeString, signedChallenge} = req.body;

    if (!address || typeof address !== 'string') {
      return res.status(400).send("address is required");
    }

    if (!challengeString || typeof challengeString !== 'string') {
      return res.status(400).send("challenge is required");
    }

    if (!signedChallenge || typeof signedChallenge !== 'string') {
      return res.status(400).send("signedChallenge is required");
    }


    const challenge = await challengeRepository.getByIdentifier(challengeString);

    console.log(challenge);

    if (!challenge || challenge.clientId !== authRequest.client.id) {
      return res.status(400).send("challenge not found");
    }

    if (challenge.accessTokenExpiresAt < new Date()) {
      return res.status(400).send("challenge expired");
    }

    try {
      await signIn({
        address,
        message: challengeString,
        signedMessage: signedChallenge,
        provider: process.env.POLKADOT_PROVIDER!
      });
    } catch (e) {
      return res.status(403).send("Unauthorised");
    }

    authRequest.user = { id: address };
    authRequest.isAuthorizationApproved = true;

    const oauthResponse = await authorizationServer.completeAuthorizationRequest(authRequest);
    return handleExpressResponse(res, oauthResponse);
  } catch (e) {
    handleExpressError(e, res);
  }
});
