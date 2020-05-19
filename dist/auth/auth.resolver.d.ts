import { AuthService } from './auth.service';
import { LoginOutPut } from './auth.type';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string): Promise<LoginOutPut>;
    verifyToken(token: string): Promise<boolean>;
}
