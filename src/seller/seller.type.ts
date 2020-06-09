import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class SellerType {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;
}

@InputType()
export class SellerInput {
    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;
}

@InputType()
export class UpdateSellerInput {
    @Field()
    id: number;

    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    phone?: string;

    @Field({nullable: true})
    email?: string;
}