import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from 'typeorm';
import { Purchase } from '../order/order.entity';

@Entity()
@Unique(['name', 'email'])
export class Seller extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToMany(() => Purchase, purchase => purchase.seller)
    purchase: Purchase[];
}