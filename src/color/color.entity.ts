import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from 'typeorm';
import { PurchaseDetail } from 'src/order-detail/order-detail.entity';

@Entity()
@Unique(['name'])
export class Color extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    rgb: string;

    @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.color)
    purchaseDetail: PurchaseDetail[];

}