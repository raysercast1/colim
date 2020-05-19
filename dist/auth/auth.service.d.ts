import { UserService } from '../user/user.service';
import { UserInput } from '../user/user.type';
import { LoginOutPut } from './auth.type';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    sign(user: UserInput): LoginOutPut;
    verify(token: string): any;
}
