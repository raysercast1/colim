import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';


@ObjectType()
export class ProductType { 

    @Field(() => ID)
    id: string;

    @Field()
    tejido: string;

    @Field()
    fibra: string;
}

@InputType()
export class ProductInput {
    @Field()
    tejido: string;

    @Field()
    fibra: string;
}