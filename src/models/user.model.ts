import { Positions } from "src/enums/positions.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    position: Positions;

    @Column({ length: 120 })
    name: string;

    @Column({ length: 80 })
    password: string;
}