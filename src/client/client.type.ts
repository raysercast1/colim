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

@InputType()
export class UpdateClientInput {
    @Field()
    id: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    email?: string;
}