import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Purchase } from '../order/order.entity';

@Entity()
export class Container extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Purchase, purchase => purchase.container )
    purchase: Purchase[];
}