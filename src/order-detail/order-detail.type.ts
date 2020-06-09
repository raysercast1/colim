import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class PurchaseDetailType {
    @Field(() => ID)
    id: number;

    @Field()
    orderId: number;

    @Field()
    productId: number;

    @Field()
    colorId: number;

    @Field()
    stamp: string;

    @Field()
    printing: string;

    @Field()
    paint: string;

    @Field()
    amountRequired: number;

    @Field()
    totalAmount: number;
}

@InputType()
export class PurchaseDetailInput {
    @Field()
    orderId: number;

    @Field()
    productId: number;

    @Field()
    colorId: number;

    @Field()
    stamp: string;

    @Field()
    printing: string;

    @Field()
    paint: string;

    @Field()
    amountRequired: number;

    @Field()
    totalAmount: number;
}

@InputType()
export class UpdatePurchaseDetail {
    @Field()
    id: number;
    
    @Field({ nullable: true })
    orderId?: number;

    @Field({ nullable: true })
    productId?: number;

    @Field({ nullable: true })
    colorId?: number;

    @Field({ nullable: true })
    stamp?: string;

    @Field({ nullable: true })
    printing?: string;

    @Field({ nullable: true })
    paint?: string;

    @Field({ nullable: true })
    amountRequired?: number;

    @Field({ nullable: true })
    totalAmount?: number;
}