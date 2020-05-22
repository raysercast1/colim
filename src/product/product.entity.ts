import { Entity, PrimaryColumn, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    tejido: string;

    @Column()
    fibra: string;

    @Column()
    fca: number;

    @Column()
    clv: number;

    @Column()
    clave: string;

    @Column()
    hs: string;

    @Column()
    posicionArc: string;

    @Column()
    acab: number;

    @Column()
    acabado: string;

    @Column()
    sku: string;

    @Column()
    refChina: string;

    @Column()
    refCliente: string;

    @Column()
    etiqueta: string;

    @Column()
    ancho: string;

    @Column()
    peso: string;

    @Column()
    composition: string;

    @Column()
    rendimiento: number;

    @Column()
    unidadMedida: string;

    @Column()
    cantMtsFinales: number;

    @Column()
    cantKlsFinales: number;

    @Column()
    cantMtKl: number;

    @Column()
    capMaxKl: number;

    @Column()
    mt3: number;

    @Column()
    portOcupation: number;
    
    /*@ManyToOne()
    provider: Provider */
}