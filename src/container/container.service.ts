import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Container } from './container.entity';
import { Repository, getConnection } from 'typeorm';
import { ContainerInput, UpdateContainerInput } from './container.type';

@Injectable()
export class ContainerService {
    constructor(@InjectRepository(Container) private readonly containerRepository: Repository<Container> ) { }

    async getContainers(): Promise<Container[]> {
        return this.containerRepository.find();
    }

    async createContainer(containerInput: ContainerInput): Promise<Container> {
        return this.containerRepository.create(containerInput).save();
    }

    async updateContainer(containerInput: UpdateContainerInput): Promise<Container | undefined > {
        const container = Object.assign(new Container, containerInput);

        await getConnection()
            .createQueryBuilder()
            .update(Container)
            .set(container)
            .where("id = :id", {id: containerInput.id})
            .execute();

        return this.containerRepository.findOne(containerInput.id);
    }

    async deleteContainer(containerId: number): Promise<boolean> {
        const { affected } = await this.containerRepository.delete({ id:containerId });
        if(affected && affected > 0) return true;
        return false;
    }
}
