import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';


@ObjectType()
export class ClientType {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;

    @Field()
    me: string;
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

@InputType()
export class UpdateClientInput {
    @Field()
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    email?: string;
}