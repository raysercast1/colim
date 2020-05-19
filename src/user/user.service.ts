import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './user.type';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email } });
    }

    async createUser(input: UserInput): Promise<User> {
        const user = await this.userRepository.create(input);
        return this.userRepository.save(user);
    }

}
