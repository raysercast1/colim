import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { User, UserInput } from './user.entity';
import { UserService } from './user.service';
// import { UseGuards } from "@nestjs/common";
// import { GQLAuthGuard } from '../auth/GQLAuth.guard';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) { }
    
    // @UseGuards(GQLAuthGuard)
    @Query(() => [User])
    users() {
        return this.userService.findAll();
    }


    @Mutation(() => User)
    createUser(@Args({name: 'user', type: () => UserInput}) user: UserInput) {
        return this.userService.createUser(user);
    }

}