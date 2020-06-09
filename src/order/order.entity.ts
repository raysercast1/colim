import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { Client } from '../client/client.entity';
import { Seller } from 'src/seller/seller.entity';
import { Container } from 'src/container/container.entity';
import { PurchaseDetail } from 'src/order-detail/order-detail.entity';

@Entity()
export class Purchase extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createAt: Date;

    @Column()
    clientId: number;

    @Column()
    sellerId: number;

    @Column()
    containerId: number;

    @Column()
    subInvoice: boolean;

    @Column()
    currency: string;

    @Column()
    language: string;

    @Column()
    trm: number;

    @Column()
    country: string;

    @Column()
    productionDate: string;

    @Column()
    boardingDate: string;

    @Column()
    taxRefund: number;

    @Column()
    iva: number;

    @Column()
    retFte: number;

    @ManyToOne(() => Client, client => client.purchase)
    client: Client;

    @ManyToOne(() => Seller, seller => seller.purchase)
    seller: Seller;
    
    @ManyToOne(() => Container, container => container.purchase)
    container: Container;

    @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.purchase) 
    purchaseDetail: PurchaseDetail[];
}