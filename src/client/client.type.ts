import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';


@ObjectType()
export class ClientType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;
}


@InputType()
export class ClientInput {
    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;
}