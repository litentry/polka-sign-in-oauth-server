import { json, urlencoded } from "body-parser";
import Express from "express";
import { Connection, createConnection } from "typeorm";
import {
  AuthorizationServer,
  DateInterval,
  JwtService,
} from "@jmondi/oauth2-server";
import { AuthCode } from "./entities/auth-code";
import { Client } from "./entities/client";
import { Scope } from "./entities/scope";
import { Token } from "./entities/token";
import { User } from "./entities/user";
import { AuthCodeRepository } from "./repositories/auth-code-repository";
import { ClientRepository } from "./repositories/client-repository";
import { ScopeRepository } from "./repositories/scope-repository";
import { TokenRepository } from "./repositories/token-repository";
import { UserRepository } from "./repositories/user-repository";
import { ChallengeRepository } from "./repositories/challenge-repository";
import { Challenge } from "./entities/challenge";
import * as path from "path";
import addRoutes from "./routes";

async function bootstrap() {
  const connection: Connection = await createConnection();

  const clientRepository = new ClientRepository(
    connection.getRepository(Client)
  );
  const challengeRepository = new ChallengeRepository(
    connection.getRepository(Challenge)
  );

  const authorizationServer = new AuthorizationServer(
    new AuthCodeRepository(connection.getRepository(AuthCode)),
    clientRepository,
    new TokenRepository(connection.getRepository(Token)),
    new ScopeRepository(connection.getRepository(Scope)),
    new UserRepository(connection.getRepository(User)),
    new JwtService(process.env.OAUTH_CODES_SECRET!)
  );
  authorizationServer.enableGrantTypes([
    "authorization_code",
    new DateInterval("15m"),
  ]);

  const app = Express();

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(Express.static(path.join(__dirname, "../public")));
  addRoutes(app, authorizationServer, challengeRepository, clientRepository);

  app.listen(3000);
}

bootstrap().catch(console.log);
