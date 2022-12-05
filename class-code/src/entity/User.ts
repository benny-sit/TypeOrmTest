import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { UserData } from "./UserData";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({ select: false, nullable: false })
  password: string;

  @OneToOne(() => UserData, (userd) => userd.user, { cascade: true })
  user_data: UserData;
}
