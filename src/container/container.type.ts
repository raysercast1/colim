import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class ContainerType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;
}

@InputType()
export class ContainerInput {
    @Field()
    name: string;
}

@InputType()
export class UpdateContainerInput {
    @Field()
    id: string;

    @Field({ nullable: true })
    name?: string
}