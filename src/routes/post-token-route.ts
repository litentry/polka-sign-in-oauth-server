import { Application, Request, Response } from "express";
import {
  handleExpressError,
  handleExpressResponse,
} from "@jmondi/oauth2-server/dist/adapters/express";
import { AuthorizationServer } from "@jmondi/oauth2-server";

export default (app: Application, authorizationServer: AuthorizationServer) =>
  app.post("/token", async (req: Request, res: Response) => {
    try {
      const oauthResponse =
        await authorizationServer.respondToAccessTokenRequest(req);
      return handleExpressResponse(res, oauthResponse);
    } catch (e) {
      handleExpressError(e, res);
      return;
    }
  });
