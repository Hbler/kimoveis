import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Property } from "./property.entity";
import { User } from "./user.entity";

@Entity("schedules_user_property")
export class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Property)
  property: Property;

  @ManyToOne(() => User)
  user: User;
}
