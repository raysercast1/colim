import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { ClientInput, UpdateClientInput } from './client.type';
import {getConnection} from "typeorm";

@Injectable()
export class ClientService {
    constructor(@InjectRepository(Client) private readonly clientRepository: Repository<Client>) { }

    async getClients(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    async createClient(clientInput: ClientInput): Promise<Client> {
        return this.clientRepository.create(clientInput).save();
    }

    async updateClient(clientInput: UpdateClientInput): Promise<Client | undefined> {        
        const client = Object.assign(new Client, clientInput)

        await getConnection()
            .createQueryBuilder()
            .update(Client)
            .set(client)
            .where("id = :id", {id: clientInput.id})
            .execute();
            
        return this.clientRepository.findOne(clientInput.id)
    }

    async deleteClient(clientId: number): Promise<boolean> {
        const { affected } = await this.clientRepository.delete({ id: clientId });
        if(affected && affected > 0 ) return true;
        return false;
    }
}
