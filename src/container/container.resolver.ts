import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ContainerType, ContainerInput, UpdateContainerInput } from './container.type';
import { ContainerService } from './container.service';

@Resolver(() => ContainerType)
export class ContainerResolver {
    constructor(
        private readonly containerService: ContainerService,
    ) { }

    @Query(() => [ContainerType])
    containers() {
        return this.containerService.getContainers();
    }

    @Mutation(() => ContainerType)
    createContainer(@Args('container') container: ContainerInput) {
        return this.containerService.createContainer(container);
    }

    @Mutation(() => ContainerType)
    updateContainer(@Args('container') container: UpdateContainerInput) {
        return this.containerService.updateContainer(container);
    }

    @Mutation(() => Boolean)
    deleteContainer(@Args('containerId') containerId: string) {
        return this.containerService.deleteContainer(containerId);
    }
}