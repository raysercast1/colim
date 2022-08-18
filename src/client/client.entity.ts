import { Entity, Unique, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Purchase } from '../order/order.entity';

@Entity()
@Unique(['email', 'name'])
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    me: string;

    @OneToMany(() => Purchase, purchase => purchase.client)
    purchase: Purchase[];
}