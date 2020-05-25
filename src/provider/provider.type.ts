import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class SupplierType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;

    @Field()
    address: string;

}

@InputType()
export class SupplierInput {
    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;

    @Field()
    address: string;
}