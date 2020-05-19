import { Entity, PrimaryColumn, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    tejido: string;

    @Column()
    fibra: string;
}