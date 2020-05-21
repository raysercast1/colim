import { UserService } from "./user.service";
import { UserInput } from "./user.type";
import { User } from './user.entity';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    me(user: User): Promise<User>;
    createUser(user: UserInput): Promise<User>;
}
