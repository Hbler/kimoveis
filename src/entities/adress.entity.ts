import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 60 })
  number: string;

  @Column({ length: 60 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
