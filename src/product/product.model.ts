import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column({ type: 'double'})
    price: number;

    @Column({ type: 'timestamptz' })
    @CreateDateColumn()
    registrationDate: Date;

    @Column({ type: 'int' })
    amount: number;

    @Column({nullable: true})
    userEmail: string;
}