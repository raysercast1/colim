import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';


@Entity()
// @Unique(['email'])
export class Supplier extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    address: string;
}