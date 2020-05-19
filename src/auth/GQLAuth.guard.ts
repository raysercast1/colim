import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";

export class GQLAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        return super.canActivate(new ExecutionContextHost([req]));
    }
}