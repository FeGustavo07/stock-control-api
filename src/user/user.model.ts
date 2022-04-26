import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    position: string;

    @Column({ length: 120 })
    name: string;

    @Column({ nullable: true, unique: true })
    email: string;

    @Column({ length: 80 })
    password: string;

}