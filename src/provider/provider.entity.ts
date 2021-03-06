import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';


@Entity()
@Unique(['email','name'])
export class Supplier extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    address: string;
    
    @OneToMany(() => Product, product => product.supplier)
    product: Product[]
}