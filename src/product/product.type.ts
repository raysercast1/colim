import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

/*This ObjectType needs a enum type */

@ObjectType()
export class ProductType { 

    @Field(() => ID)
    id: number;

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
    csf: number;

    @Field()
    crf: number;

    @Field()
    pvp: number;

    @Field()
    psv: number;

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

    @Field({nullable: true})
    purchaseDetailId?: number;

    @Field()
    supplierId: number;
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
    csf: number;

    @Field()
    crf: number;

    @Field()
    pvp: number;

    @Field()
    psv: number;

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

    @Field({nullable: true})
    purchaseDetailId?: number;

    @Field()
    supplierId: number;
}

@InputType()
export class UpdateProductInput {
    @Field()
    id: number;

    @Field({ nullable: true })
    fabric?: string;

    @Field({ nullable: true })
    fibre?: string;

    @Field({ nullable: true })
    fca?: number;

    @Field({ nullable: true })
    clv?: number;

    @Field({ nullable: true })
    key?: string;

    @Field({ nullable: true })
    hs?: string;

    @Field({ nullable: true })
    positionArc?: string;

    @Field({ nullable: true })
    acab?: number;

    @Field({ nullable: true })
    acabado?: string;

    @Field({ nullable: true })
    sku?: string;

    @Field({ nullable: true })
    csf?: number;

    @Field({ nullable: true })
    crf?: number;

    @Field({ nullable: true })
    pvp?: number;

    @Field({ nullable: true })
    psv?: number;

    @Field({ nullable: true })
    refChina?: string;

    @Field({ nullable: true })
    refClient?: string;

    @Field({ nullable: true })
    label?: string;

    @Field({ nullable: true })
    wide?: string;

    @Field({ nullable: true })
    weight?: string;

    @Field({ nullable: true })
    composition?: string;

    @Field({ nullable: true })
    perfomance?: number;

    @Field({ nullable: true })
    unitMeasure?: string;

    @Field({ nullable: true })
    cantMtsFinals?: number;

    @Field({ nullable: true })
    cantKlsFinals?: number;

    @Field({ nullable: true })
    cantMtKl?: number;

    @Field({ nullable: true })
    capMaxKl?: number;

    @Field({ nullable: true })
    mt3?: number;

    @Field({ nullable: true })
    portOcupation?: number;

    @Field({nullable: true})
    purchaseDetailId?: number;

    @Field({ nullable: true })
    supplierId?: number;

}