import { Repository } from "typeorm";
import {
  GrantIdentifier,
  OAuthClient,
  OAuthClientRepository,
} from "@jmondi/oauth2-server";

import { Client } from "../entities/client";
import { Challenge } from "../entities/challenge";

export class ChallengeRepository {
  constructor(private readonly challengeRepo: Repository<Challenge>) {}

  async getByIdentifier(id: string): Promise<Challenge | undefined> {
    console.log(id, "foo");
    console.log(await this.challengeRepo.findOne(id));
    return this.challengeRepo.findOne(id);
  }

  persist(challenge: Challenge): Promise<Challenge> {
    return this.challengeRepo.save(challenge);
  }
}
