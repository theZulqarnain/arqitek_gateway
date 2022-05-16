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
exports.TransformService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let TransformService = class TransformService {
    constructor(TRANSFORM_SERVICE) {
        this.TRANSFORM_SERVICE = TRANSFORM_SERVICE;
    }
    pingServiceA() {
        const startTs = Date.now();
        const pattern = { cmd: "ping" };
        const payload = [1, 4, 3];
        return this.TRANSFORM_SERVICE
            .send(pattern, payload);
    }
    getDomainsDetails() {
        try {
            const pattern = { cmd: "getDomainsDetails" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchCanvas() {
        try {
            const pattern = { cmd: "fetchCanvas" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchRelations() {
        try {
            const pattern = { cmd: "fetchRelations" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchProjects() {
        try {
            const pattern = { cmd: "fetchProjects" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    geInitiativeList() {
        try {
            const pattern = { cmd: "geInitiativeList" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addInitiative(body) {
        try {
            const pattern = { cmd: "addInitiative" };
            const payload = body;
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getPracticeInitiatives() {
        try {
            const pattern = { cmd: "getPracticeInitiatives" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getInitiatives() {
        try {
            const pattern = { cmd: "getInitiatives" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getStages() {
        try {
            const pattern = { cmd: "getStages" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getFeatures() {
        try {
            const pattern = { cmd: "getFeatures" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getPriorities() {
        try {
            const pattern = { cmd: "getPriorities" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
TransformService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("TRANSFORM_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], TransformService);
exports.TransformService = TransformService;
//# sourceMappingURL=transform.service.js.map