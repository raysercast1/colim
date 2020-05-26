import { Entity, Unique, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
@Unique(['email'])
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;
}