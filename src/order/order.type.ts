import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class PurchaseType {
    @Field(() => ID)
    id: string;

    @Field()
    clientId: string;

    @Field()
    sellerId: string;

    @Field()
    containerId: string;

    @Field()
    subInvoice: string;
}


@InputType()
export class PurchaseInput {
    @Field()
    clientId: string;

    @Field()
    sellerId: string;

    @Field()
    containerId: string;

    @Field()
    subInvoice: string;
}