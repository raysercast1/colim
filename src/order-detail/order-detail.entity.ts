import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { Color } from 'src/color/color.entity';
import { Product } from '../product/product.entity';
import { Purchase } from '../order/order.entity';

@Entity()
export class PurchaseDetail extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    purchaseId: number;

    @Column()
    productId: number;

    @Column()
    colorId: number;

    @Column()
    stamp: string;

    @Column()
    printing: string;

    @Column()
    paint: string;

    @CreateDateColumn()
    documentDate: Date;

    @Column()
    amountRequired: number;

    @Column()
    totalAmount: number;

    @ManyToOne(() => Purchase, purchase => purchase.purchaseDetail)
    purchase: Purchase;

    @ManyToOne(() => Product, product => product.purchaseDetail)
    product: Product;

    @ManyToOne(() => Color, color => color.purchaseDetail) 
    color: Color;   
    
}