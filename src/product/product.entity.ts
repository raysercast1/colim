import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, InputType } from '@nestjs/graphql';


@ObjectType()
@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string;

    @Column()
    @Field()
    tejido: string;
    
    @Column()
    @Field()
    fibra: string;

    // @Column()
    // @Field()
    // fca: number;

    // @Column()
    // @Field()
    // clv: number;

    // @Column()
    // @Field()
    // clave: string;

    // @Column()
    // @Field()
    // hs: string;

    // @Column()
    // @Field()
    // posicionAranc: string;

    // @Column()
    // @Field()
    // acab: number;

    // @Column()
    // @Field()
    // acabado: string;

    // @Column()
    // @Field()
    // sku: string;

    // @Column()
    // @Field()
    // refChina: string;

    // @Column()
    // @Field()
    // refClient: string;

    // @Column()
    // @Field()
    // etiqueta: string;

    // @Column()
    // @Field()
    // ancho: string;

    // @Column()
    // @Field()
    // peso: string;

    // @Column()
    // @Field()
    // composition: string;

    // @Column()
    // @Field()
    // rendimiento: number;

    // @Column()
    // @Field()
    // unidadMedida: string;

    // @Column()
    // @Field()
    // cantMtsFinales: number;

    // @Column()
    // @Field()
    // canKlsFinales: number;

    // @Column()
    // @Field()
    // cantMtKl: number;

    // @Column()
    // @Field()
    // mt3: number;

    // @Column()
    // @Field()
    // portOcupacion: number;

}

@InputType()
export class ProductInput {
    @Field()
    id: string;

    @Field()
    tejido: string;

    @Field()
    fibra: string;
}