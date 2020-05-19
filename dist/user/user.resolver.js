"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_type_1 = require("./user.type");
const CurrentUser_decorator_1 = require("./CurrentUser.decorator");
const user_entity_1 = require("./user.entity");
let UserResolver = (() => {
    let UserResolver = class UserResolver {
        constructor(userService) {
            this.userService = userService;
        }
        users() {
            return this.userService.findAll();
        }
        whoAmI(user) {
            return this.userService.findByEmail(user.email);
        }
        createUser(user) {
            return this.userService.createUser(user);
        }
    };
    __decorate([
        graphql_1.Query(() => [user_type_1.UserType]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserResolver.prototype, "users", null);
    __decorate([
        graphql_1.Query(() => user_type_1.UserType),
        __param(0, CurrentUser_decorator_1.CurrentUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_entity_1.User]),
        __metadata("design:returntype", void 0)
    ], UserResolver.prototype, "whoAmI", null);
    __decorate([
        graphql_1.Mutation(() => user_type_1.UserType),
        __param(0, graphql_1.Args({ name: 'user', type: () => user_type_1.UserInput })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_type_1.UserInput]),
        __metadata("design:returntype", void 0)
    ], UserResolver.prototype, "createUser", null);
    UserResolver = __decorate([
        graphql_1.Resolver(() => user_type_1.UserType),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserResolver);
    return UserResolver;
})();
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map