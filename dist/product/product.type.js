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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInput = exports.ProductType = void 0;
const graphql_1 = require("@nestjs/graphql");
let ProductType = (() => {
    let ProductType = class ProductType {
    };
    __decorate([
        graphql_1.Field(() => graphql_1.ID),
        __metadata("design:type", String)
    ], ProductType.prototype, "id", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "fabric", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "fibre", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "fca", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "clv", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "key", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "hs", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "positionArc", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "acab", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "acabado", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "sku", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "refChina", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "refClient", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "label", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "wide", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "weight", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "composition", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "perfomance", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductType.prototype, "unitMeasure", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "cantMtsFinals", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "cantKlsFinals", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "cantMtKl", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "capMaxKl", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "mt3", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductType.prototype, "portOcupation", void 0);
    ProductType = __decorate([
        graphql_1.ObjectType()
    ], ProductType);
    return ProductType;
})();
exports.ProductType = ProductType;
let ProductInput = (() => {
    let ProductInput = class ProductInput {
    };
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "fabric", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "fibre", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "fca", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "clv", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "key", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "hs", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "positionArc", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "acab", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "acabado", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "sku", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "refChina", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "refClient", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "label", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "wide", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "weight", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "composition", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "perfomance", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], ProductInput.prototype, "unitMeasure", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "cantMtsFinals", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "cantKlsFinals", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "cantMtKl", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "capMaxKl", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "mt3", void 0);
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "portOcupation", void 0);
    ProductInput = __decorate([
        graphql_1.InputType()
    ], ProductInput);
    return ProductInput;
})();
exports.ProductInput = ProductInput;
//# sourceMappingURL=product.type.js.map