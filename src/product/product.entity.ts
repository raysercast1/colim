import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Supplier } from '../provider/provider.entity';
import { PurchaseDetail } from 'src/order-detail/order-detail.entity';

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fabric: string;

    @Column()
    fibre: string;

    @Column()
    fca: number;

    @Column()
    clv: number;

    @Column()
    key: string;

    @Column()
    hs: string;

    @Column()
    positionArc: string;

    @Column()
    acab: number;

    @Column()
    acabado: string;

    @Column()
    sku: string;

    @Column()
    csf: number;

    @Column()
    crf: number;

    @Column()
    pvp: number;

    @Column()
    psv: number;

    @Column()
    refChina: string;

    @Column()
    refClient: string;

    @Column()
    label: string;

    @Column()
    wide: string;

    @Column()
    weight: string;

    @Column()
    composition: string;

    @Column()
    perfomance: number;

    @Column()
    unitMeasure: string;

    @Column()
    cantMtsFinals: number;

    @Column()
    cantKlsFinals: number;

    @Column()
    cantMtKl: number;

    @Column()
    capMaxKl: number;

    @Column()
    mt3: number;

    @Column()
    portOcupation: number;

    @Column()
    supplierId: number;

    @Column({nullable: true})
    purchaseDetailId: number;
    
    @ManyToOne(() => Supplier, supplier => supplier.product)
    supplier: Supplier;

    @OneToMany(() => PurchaseDetail, purchaseDetail => purchaseDetail.product)
    purchaseDetail: PurchaseDetail[];
}