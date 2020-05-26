import { Entity, Unique, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Purchase } from '../order/order.entity';

@Entity()
@Unique(['email'])
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @OneToMany(() => Purchase, purchase => purchase.client)
    purchase: Purchase[];
}