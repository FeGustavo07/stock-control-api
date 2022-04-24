import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column('double')
    price: number;

    @Column()
    registrationDate: Date;

    @Column('int')
    amount: number;
}