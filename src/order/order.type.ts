import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class PurchaseType {
    @Field(() => ID)
    id: number;

    @Field()
    clientId: number;

    @Field()
    sellerId: number;

    @Field()
    containerId: number;

    @Field()
    subInvoice: boolean;

    @Field()
    currency: string;

    @Field()
    language: string;

    @Field()
    trm: number;

    @Field()
    country: string;

    @Field()
    productionDate: string;

    @Field()
    boardingDate: string;

    @Field()
    taxRefund: number;

    @Field()
    iva: number;

    @Field()
    retFte: number;
}


@InputType()
export class PurchaseInput {
    @Field()
    clientId: number;

    @Field()
    sellerId: number;

    @Field()
    containerId: number;

    @Field()
    subInvoice: boolean;

    @Field()
    currency: string;

    @Field()
    language: string;

    @Field()
    trm: number;

    @Field()
    country: string;

    @Field()
    productionDate: string;

    @Field()
    boardingDate: string;

    @Field()
    taxRefund: number;

    @Field()
    iva: number;

    @Field()
    retFte: number;
}

@InputType()
export class UpdatePurchaseInput {
    @Field()
    id: number;

    @Field({ nullable: true })
    clientId?: number;

    @Field({ nullable: true })
    sellerId?: number;

    @Field({ nullable: true })
    containerId?: number;

    @Field({ nullable: true })
    subInvoice?: boolean;

    @Field({ nullable: true })
    currency?: string;

    @Field({ nullable: true })
    language?: string;

    @Field({ nullable: true })
    trm?: number;

    @Field({ nullable: true })
    country?: string;

    @Field({ nullable: true })
    productionDate?: string;

    @Field({ nullable: true })
    boardingDate?: string;

    @Field({ nullable: true })
    taxRefund?: number;

    @Field({ nullable: true })
    iva?: number;

    @Field({ nullable: true })
    retFte?: number;
}