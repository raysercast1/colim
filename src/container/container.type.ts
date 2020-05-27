import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ContainerType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;
}