import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ClientType, ClientInput, UpdateClientInput } from "./client.type";
import { ClientService } from "./client.service";

@Resolver(() => ClientType)
export class ClientResolver {
    constructor(
        private readonly clientService: ClientService,
    ) { }

    @Query(() => [ClientType])
    clients() {
        return this.clientService.getClients();
    }

    @Mutation(() => ClientType)
    createClient(@Args('client') client: ClientInput) {
        return this.clientService.createClient(client);
    }

    @Mutation(() => ClientType)
    updateClient(@Args('client') client: UpdateClientInput) {
        return this.clientService.updateClient(client);
    }

    @Mutation(() => Boolean)
    deleteClient(@Args('clientId') clientId: string){
        return this.clientService.deleteClient(clientId);
    }


}