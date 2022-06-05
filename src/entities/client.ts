import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { GrantIdentifier, OAuthClient } from "@jmondi/oauth2-server";

import { Scope } from "./scope";

@Entity("oauth_clients")
export class Client implements OAuthClient {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column("varchar", { length: 128, nullable: true })
  // @Length(64, 128)
  // @IsOptional()
  secret?: string;

  @Column("varchar", { length: 128, unique: true })
  name!: string;

  @Column("simple-array")
  redirectUris!: string[];

  @Column("simple-array")
  allowedGrants!: GrantIdentifier[];

  @ManyToMany(() => Scope, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinTable({
    name: "oauth_client_scopes",
    joinColumn: { name: "clientId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "scopeId", referencedColumnName: "id" },
  })
  scopes!: Scope[];

  @CreateDateColumn()
  createdAt!: Date;

  constructor(name: string, redirectUris: string[]) {
    this.name = name;
    this.redirectUris = redirectUris;
    this.allowedGrants = ['authorization_code']
  }
}
