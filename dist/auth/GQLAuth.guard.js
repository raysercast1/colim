"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQLAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
const graphql_1 = require("@nestjs/graphql");
const execution_context_host_1 = require("@nestjs/core/helpers/execution-context-host");
class GQLAuthGuard extends passport_1.AuthGuard('jwt') {
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        return super.canActivate(new execution_context_host_1.ExecutionContextHost([req]));
    }
}
exports.GQLAuthGuard = GQLAuthGuard;
//# sourceMappingURL=GQLAuth.guard.js.map