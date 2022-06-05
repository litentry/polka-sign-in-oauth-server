import {Request, Response, Application} from "express";
import {handleExpressError, requestFromExpress} from "@jmondi/oauth2-server/dist/adapters/express";
import {AuthorizationServer, OAuthClientRepository} from "@jmondi/oauth2-server";
import {ChallengeRepository} from "../repositories/challenge-repository";
import signIn from "../views/sign-in";
import {ClientRepository} from "../repositories/client-repository";
import {Challenge} from "../entities/challenge";

export default (
  app: Application,
  authorizationServer: AuthorizationServer,
  challengeRepository: ChallengeRepository
) => app.get("/authorise", async (req: Request, res: Response) => {

  try {
    const authRequest = await authorizationServer.validateAuthorizationRequest(requestFromExpress(req));
    const {client} = authRequest;

    const accessTokenExpiresAt = new Date((new Date).getTime() + (5 * 60 * 1000));
    const challenge = await challengeRepository.persist(new Challenge(client.id, accessTokenExpiresAt));

    return res.send(signIn(client.name, challenge.id));
  } catch (e) {
    handleExpressError(e, res);
  }
});

