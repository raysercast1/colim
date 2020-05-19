import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './user.type';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    createUser(input: UserInput): Promise<User>;
}
