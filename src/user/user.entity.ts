import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Unique, BaseEntity, CreateDateColumn } from 'typeorm';

@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    createdAt: Date;

}

@Entity('user')
@Unique(['email'])
export class UserWithPassword extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

}

InputType()
export class UserInput {

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    password: string;
}