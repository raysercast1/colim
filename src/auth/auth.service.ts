import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from "src/user/user.entity";
import { LoginOutPut } from './auth.entity';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userService.findByEmail(email);
        if(!user) return null;
        
        const valid = await new Promise(res => {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) res(false);
                else res(result);
            });
        });

        if(!valid) return null;

        const {password: p, ...result} = user;
        return result;
    }

    sign(user: User): LoginOutPut {
        return {
            accessToken: this.jwtService.sign({
                user
            })
        };
    }

    verify(token: string) {
        return this.jwtService.verify(token);
    }

}