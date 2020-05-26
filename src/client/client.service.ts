import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { ClientInput } from './client.type';

@Injectable()
export class ClientService {
    constructor(@InjectRepository(Client) private readonly clientRepository: Repository<Client>) { }

    async getClients(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    async createClient(clientInput: ClientInput) {
        return this.clientRepository.create(clientInput).save();
    }
}
