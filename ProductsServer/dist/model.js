var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, createConnection } from 'typeorm';
export let Product = class {
};
__decorate([
    PrimaryGeneratedColumn(), 
    __metadata('design:type', Number)
], Product.prototype, "id");
__decorate([
    Column(), 
    __metadata('design:type', String)
], Product.prototype, "name");
__decorate([
    Column(), 
    __metadata('design:type', String)
], Product.prototype, "sku");
__decorate([
    Column('text'), 
    __metadata('design:type', String)
], Product.prototype, "description");
__decorate([
    Column(), 
    __metadata('design:type', Number)
], Product.prototype, "price");
__decorate([
    Column(), 
    __metadata('design:type', Number)
], Product.prototype, "stock");
Product = __decorate([
    Entity(), 
    __metadata('design:paramtypes', [])
], Product);
let connection;
async;
function getProductRepository() {
    if (connection === undefined) {
        connection = await;
        createConnection({
            type: 'sqlite',
            database: 'myangularapp',
            synchronize: true,
            entities: [
                Product
            ],
        });
    }
    return connection.getRepository(Product);
}
