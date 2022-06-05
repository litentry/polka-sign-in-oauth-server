import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { OAuthToken } from "@jmondi/oauth2-server";

import { Client } from "./client";
import { Scope } from "./scope";
import { User } from "./user";

@Entity("oauth_tokens")
export class Token implements OAuthToken {
  @PrimaryColumn("varchar", { length: 320 })
  // @Length(43, 128)
  accessToken!: string;

  @Column()
  accessTokenExpiresAt!: Date;

  @Column("varchar", { nullable: true, length: 320 })
  @Index()
  // @Length(43, 128)
  refreshToken?: string;

  @Column({ nullable: true })
  refreshTokenExpiresAt?: Date;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "clientId" })
  client!: Client;

  @Index()
  @Column("uuid")
  clientId!: string;

  @Index()
  @Column("varchar", { nullable: true })
  // @IsUUID()
  userId?: string;

  @ManyToMany(() => Scope, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinTable({
    name: "oauth_token_scopes",
    joinColumn: {
      name: "tokenAccessToken",
      referencedColumnName: "accessToken",
    },
    inverseJoinColumn: { name: "scopeId", referencedColumnName: "id" },
  })
  scopes!: Scope[];

  @CreateDateColumn()
  createdAt!: Date;

  get isRevoked() {
    return Date.now() > this.accessTokenExpiresAt.getTime();
  }

  revoke() {
    this.accessTokenExpiresAt = new Date(0);
    this.refreshTokenExpiresAt = new Date(0);
  }
}
