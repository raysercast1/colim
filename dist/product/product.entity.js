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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const provider_entity_1 = require("../provider/provider.entity");
let Product = (() => {
    let Product = class Product extends typeorm_1.BaseEntity {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "fabric", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "fibre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "fca", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "clv", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "key", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "hs", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "positionArc", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "acab", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "acabado", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "sku", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "refChina", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "refClient", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "label", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "wide", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "weight", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "composition", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "perfomance", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "unitMeasure", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "cantMtsFinals", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "cantKlsFinals", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "cantMtKl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "capMaxKl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "mt3", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "portOcupation", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "supplierId", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => provider_entity_1.Supplier, supplier => supplier.product),
        __metadata("design:type", provider_entity_1.Supplier)
    ], Product.prototype, "supplier", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
})();
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map