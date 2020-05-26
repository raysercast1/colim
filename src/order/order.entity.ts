import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Client } from '../client/client.entity';

@Entity()
export class Purchase extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: true})
    createAt: Date;

    @Column()
    clientId: string;

    @Column()
    sellerId: string;

    @Column()
    containerId: string;

    @Column()
    subInvoice: string;

    @ManyToOne(() => Client, client => client.purchase)
    client: Client;
}