import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { UserType, UserInput } from "./user.type";
import { CurrentUser } from "./CurrentUser.decorator";
import { User } from './user.entity';

@Resolver(() => UserType)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(() => [UserType])
    users() {
        return this.userService.findAll();
    }

    @Query(() => UserType)
    me(@CurrentUser() user: User) {
        return this.userService.findByEmail(user.email)
    }

    @Mutation(() => UserType)
    createUser(@Args({name: 'user', type: () => UserInput}) user: UserInput) {
        return this.userService.createUser(user);
    }
}