import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class SupplierType {
    @Field(() => ID)
    id: number;

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

@InputType()
export class UpdateSupplierInput { 
    @Field()
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    address?: string;
}