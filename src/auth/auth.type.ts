import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutPut {
    @Field()
    accessToken: string;
}

@InputType()
export class LoginInput {
    @Field()
    email: string;

    @Field()
    password: string;
}