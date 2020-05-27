import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Purchase } from '../order/order.entity';

@Entity()
export class Seller extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToMany(() => Purchase, purchase => purchase.seller)
    purchase: Purchase[];
}