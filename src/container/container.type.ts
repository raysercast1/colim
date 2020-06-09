import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class ContainerType {
    @Field(() => ID)
    id: number;

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
    id: number;

    @Field({ nullable: true })
    name?: string
}