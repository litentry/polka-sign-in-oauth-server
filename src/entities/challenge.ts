import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index} from "typeorm";
import {Client} from "./client";

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Client, { nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "clientId" })
  client!: Client;

  @Index()
  @Column({ name: "clientId" })
  clientId!: string;

  @Column()
  accessTokenExpiresAt!: Date;

  constructor(clientId: string, accessTokenExpiresAt: Date) {
    this.clientId = clientId;
    this.accessTokenExpiresAt = accessTokenExpiresAt;
  }
}
