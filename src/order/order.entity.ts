import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

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
}