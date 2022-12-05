import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, } from "typeorm";
import { User } from "./User";

@Entity()
export class UserData {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({
        default: false,
        name: "verified"
    })
    is_Verified: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(() => User, (user) => user.user_data, { onDelete: 'CASCADE'})
    @JoinColumn()
    user: User

}