import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';


@ObjectType()
export class ProductType { 

    @Field(() => ID)
    id: string;

    @Field()
    fabric: string;

    @Field()
    fibre: string;

    @Field()
    fca: number;

    @Field()
    clv: number;

    @Field()
    key: string;

    @Field()
    hs: string;

    @Field()
    positionArc: string;

    @Field()
    acab: number;

    @Field()
    acabado: string;

    @Field()
    sku: string;

    @Field()
    refChina: string;

    @Field()
    refClient: string;

    @Field()
    label: string;

    @Field()
    wide: string;

    @Field()
    weight: string;

    @Field()
    composition: string;

    @Field()
    perfomance: number;

    @Field()
    unitMeasure: string;

    @Field()
    cantMtsFinals: number;

    @Field()
    cantKlsFinals: number;

    @Field()
    cantMtKl: number;

    @Field()
    capMaxKl: number;

    @Field()
    mt3: number;

    @Field()
    portOcupation: number;
}

@InputType()
export class ProductInput {
    @Field()
    fabric: string;

    @Field()
    fibre: string;

    @Field()
    fca: number;

    @Field()
    clv: number;

    @Field()
    key: string;

    @Field()
    hs: string;

    @Field()
    positionArc: string;

    @Field()
    acab: number;

    @Field()
    acabado: string;

    @Field()
    sku: string;

    @Field()
    refChina: string;

    @Field()
    refClient: string;

    @Field()
    label: string;

    @Field()
    wide: string;

    @Field()
    weight: string;

    @Field()
    composition: string;

    @Field()
    perfomance: number;

    @Field()
    unitMeasure: string;

    @Field()
    cantMtsFinals: number;

    @Field()
    cantKlsFinals: number;

    @Field()
    cantMtKl: number;

    @Field()
    capMaxKl: number;

    @Field()
    mt3: number;

    @Field()
    portOcupation: number;
}