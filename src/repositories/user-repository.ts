import { Repository } from "typeorm";
import {
  ExtraAccessTokenFields,
  GrantIdentifier,
  OAuthUserRepository,
} from "@jmondi/oauth2-server";

import { Client } from "../entities/client";
import { User } from "../entities/user";

export class UserRepository implements OAuthUserRepository {
  constructor(private readonly userRepository: Repository<User>) {}
  async getUserByCredentials(
    identifier: string,
    password?: string,
    grantType?: GrantIdentifier,
    client?: Client
  ): Promise<User> {
    return { id: identifier };
  }

  async extraAccessTokenFields(
    user: User
  ): Promise<ExtraAccessTokenFields | undefined> {
    return {};
  }
}
