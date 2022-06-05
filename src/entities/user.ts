import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { OAuthUser } from "@jmondi/oauth2-server";

@Entity()
export class User implements OAuthUser {
  @PrimaryColumn()
  id!: string;
}
