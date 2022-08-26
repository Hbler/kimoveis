import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Property } from "./property.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, length: 60 })
  name: string;

  @OneToMany(() => Property, (properties) => properties.category)
  properties: Property[];
}
