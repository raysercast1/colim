"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const product_module_1 = require("./product/product.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const provider_module_1 = require("./provider/provider.module");
const client_module_1 = require("./client/client.module");
const order_module_1 = require("./order/order.module");
const seller_module_1 = require("./seller/seller.module");
const container_module_1 = require("./container/container.module");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
                graphql_1.GraphQLModule.forRoot({
                    autoSchemaFile: true,
                    context: ({ req }) => ({ req }),
                }),
                product_module_1.ProductModule,
                auth_module_1.AuthModule,
                user_module_1.UserModule,
                provider_module_1.ProviderModule,
                client_module_1.ClientModule,
                order_module_1.OrderModule,
                seller_module_1.SellerModule,
                container_module_1.ContainerModule
            ],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map