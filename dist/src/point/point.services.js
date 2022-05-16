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
exports.PointService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let PointService = class PointService {
    constructor(POINT_SERVICE, UAMService) {
        this.POINT_SERVICE = POINT_SERVICE;
        this.UAMService = UAMService;
    }
    pingpoint(query) {
        try {
            return "Point root API";
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    getComments(query) {
        try {
            const pattern = "getComments";
            const payload = query;
            return this.POINT_SERVICE
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
    addComment(body) {
        try {
            const pattern = "addComment";
            const payload = body;
            return this.POINT_SERVICE
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
    updateComment(body) {
        try {
            const pattern = "updateComment";
            const payload = body;
            return this.POINT_SERVICE
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
    deleteComment(id) {
        try {
            const pattern = "deleteComment";
            const payload = id;
            return this.POINT_SERVICE
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
PointService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("POINT_SERVICE")),
    __param(1, common_1.Inject("UAM_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], PointService);
exports.PointService = PointService;
//# sourceMappingURL=point.services.js.map