import { ExecutionContext } from "@nestjs/common";
declare const GQLAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GQLAuthGuard extends GQLAuthGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
}
export {};
