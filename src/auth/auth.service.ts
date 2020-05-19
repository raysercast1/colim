import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { UserInput } from '../user/user.type';
import { LoginOutPut } from './auth.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if(!user) return null

        const valid = await new Promise(res => {
            bcrypt.compare(password, user.password, (err: any, result: any) => {
                if(err) res(false);
                else res(result);
            });
        });

        if(!valid) return null;

        const { password: p, ...result} = user;

        return result;
    }

    sign(user: UserInput): LoginOutPut {
        return {
            accessToken: this.jwtService.sign({user})
        };
    }

    verify(token: string) {
        return this.jwtService.verify(token);
    }


}
