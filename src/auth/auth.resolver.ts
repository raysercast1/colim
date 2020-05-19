import { AuthService } from './auth.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { LoginOutPut } from './auth.type';

@Resolver(() => LoginOutPut)
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Mutation(() => LoginOutPut)
    async login(@Args('email') email: string, @Args('password') password: string) {
        const user = await this.authService.validateUser(email, password);
        if(!user) throw new Error('Invalid login credentials');
        return this.authService.sign(user);
    }

    @Query(() => Boolean)
    async verifyToken(@Args('accessToken') token: string) {
        try{
            this.authService.verify(token);
            return true;
        } catch(e) {
            return false;
        }
    }
}