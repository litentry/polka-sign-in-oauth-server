import {Application} from "express";
import {AuthorizationServer} from "@jmondi/oauth2-server";
import {ChallengeRepository} from "../repositories/challenge-repository";
import addGetAuthoriseRoute from "./get-authorise-route";
import addPostLoginRoute from "./post-login-route";
import addPostTokenRoute from "./post-token-route";
import addPostClientRoute from "./post-client-route";
import {ClientRepository} from "../repositories/client-repository";

export default (
  app: Application,
  authorizationServer: AuthorizationServer,
  challengeRepository: ChallengeRepository,
  clientRepository: ClientRepository
) => {
  addGetAuthoriseRoute(app, authorizationServer, challengeRepository);
  addPostLoginRoute(app, authorizationServer, challengeRepository);
  addPostTokenRoute(app, authorizationServer);
  addPostClientRoute(app, clientRepository);
}