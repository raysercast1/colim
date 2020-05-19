import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';


@ObjectType()
export class UserType {
    @Field(() => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;
}

@InputType()
export class UserInput {
    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;
}