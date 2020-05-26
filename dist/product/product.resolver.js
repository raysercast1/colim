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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_type_1 = require("./product.type");
const product_service_1 = require("./product.service");
const common_1 = require("@nestjs/common");
const GQLAuth_guard_1 = require("../auth/GQLAuth.guard");
let ProductResolver = (() => {
    let ProductResolver = class ProductResolver {
        constructor(productService) {
            this.productService = productService;
        }
        products() {
            return this.productService.getProducts();
        }
        createProduct(product) {
            return this.productService.createProduct(product);
        }
        updateProduct(product) {
            return this.productService.updateProduct(product);
        }
        deleteProduct(productId) {
            return this.productService.deleteProduct(productId);
        }
    };
    __decorate([
        graphql_1.Query(() => [product_type_1.ProductType]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductResolver.prototype, "products", null);
    __decorate([
        common_1.UseGuards(GQLAuth_guard_1.GQLAuthGuard),
        graphql_1.Mutation(() => product_type_1.ProductType),
        __param(0, graphql_1.Args('product')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [product_type_1.ProductInput]),
        __metadata("design:returntype", void 0)
    ], ProductResolver.prototype, "createProduct", null);
    __decorate([
        graphql_1.Mutation(() => product_type_1.ProductType),
        __param(0, graphql_1.Args('product')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [product_type_1.UpdateProductInput]),
        __metadata("design:returntype", void 0)
    ], ProductResolver.prototype, "updateProduct", null);
    __decorate([
        graphql_1.Mutation(() => Boolean),
        __param(0, graphql_1.Args('productId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ProductResolver.prototype, "deleteProduct", null);
    ProductResolver = __decorate([
        graphql_1.Resolver(() => product_type_1.ProductType),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductResolver);
    return ProductResolver;
})();
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map