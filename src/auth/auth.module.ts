import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from '@nestjs/passport';
import config from 'config';
import { UserModule } from '../user/user.module';
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { JWTStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule, 
        JwtModule.register({
            secret: config.get('auth.jwtSecret'),
            signOptions: { expiresIn: '1h' }
        })
    ],
    providers: [AuthResolver, AuthService, LocalStrategy, JWTStrategy],
    exports: [AuthService]
})
export class AuthModule {}