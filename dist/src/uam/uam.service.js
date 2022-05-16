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
exports.UamService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let UamService = class UamService {
    constructor(UAMService) {
        this.UAMService = UAMService;
    }
    pingServiceA() {
        try {
            const pattern = { cmd: "authUser" };
            const payload = {};
            return this.UAMService
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
    login(req, body) {
        try {
            const pattern = { cmd: "signin" };
            const payload = Object.assign(Object.assign({}, body), { productCode: req.headers.product_code });
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    validateUserProductOrg(req, body) {
        try {
            const pattern = { cmd: "validateUserProductOrg" };
            const path = req.route.path;
            const method = req.method;
            const payload = { jwt: req.headers['authorization'], productCode: req.headers['product_code'], feature: path, requestType: method, orgId: req.headers['org_id'] };
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    createUser(body) {
        try {
            const pattern = { cmd: "createUser" };
            const payload = body;
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e.message, e.status);
        }
    }
    fetchuserOrgs(userId) {
        try {
            const pattern = { cmd: "fetchUserOrgs" };
            const payload = userId;
            return this.UAMService
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
    addOrgToUser(body) {
        try {
            const pattern = { cmd: "addOrgToUser" };
            const payload = body;
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e.message, e.status);
        }
    }
    fetchorgUsers(query) {
        try {
            const pattern = { cmd: "fetchorgUsers" };
            const payload = query;
            return this.UAMService
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
    fetchUserProductRoles(query) {
        try {
            const pattern = { cmd: "fetchUserProductRoles" };
            const payload = query;
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(5000))
                .toPromise();
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addUserToProduct(body) {
        try {
            const pattern = { cmd: "addUserToProduct" };
            const payload = body;
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e.message, e.status);
        }
    }
    userPrograms(query) {
        try {
            const pattern = { cmd: "getUserProgram" };
            const payload = query;
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    createPrivilege(body) {
        try {
            const pattern = { cmd: "createPrivilege" };
            const payload = body;
            return this.UAMService
                .send(pattern, payload)
                .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response, e.statusCode));
            }));
        }
        catch (e) {
            console.log(e, 'show');
            throw new common_1.HttpException(e.message, e.status);
        }
    }
    createRole(body) {
        try {
            const pattern = { cmd: "createRole" };
            const payload = body;
            return this.UAMService
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
    fetchRoles(query) {
        try {
            const pattern = { cmd: "fetchRoles" };
            const payload = query;
            return this.UAMService
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
    addPrivilegeToRole(body) {
        try {
            const pattern = { cmd: "addPrivilegeToRole" };
            const payload = body;
            return this.UAMService
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
    createOrg(body) {
        try {
            const pattern = { cmd: "createOrg" };
            const payload = body;
            return this.UAMService
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
    createProduct(body) {
        try {
            const pattern = { cmd: "createProduct" };
            const payload = body;
            return this.UAMService
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
    userProgramsWithParams(query) {
        try {
            const pattern = { cmd: "userProgramsWithParams" };
            const payload = query;
            return this.UAMService
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
    createProgram(body) {
        try {
            const pattern = { cmd: "createProgram" };
            const payload = body;
            return this.UAMService
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
    addUserToProgram(body) {
        try {
            const pattern = { cmd: "addUserToProgram" };
            const payload = body;
            return this.UAMService
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
    fetchProgramUsers(query) {
        try {
            const pattern = { cmd: "fetchProgramUsers" };
            const payload = query;
            return this.UAMService
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
    fetchOrgSubscriptions(query) {
        try {
            const pattern = { cmd: "fetchOrgSubscriptions" };
            const payload = query;
            return this.UAMService
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
    addOrgSubscription(body) {
        try {
            const pattern = { cmd: "addOrgSubscription" };
            const payload = body;
            return this.UAMService
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
    updateOrgSubscription(body) {
        try {
            const pattern = { cmd: "updateOrgSubscription" };
            const payload = body;
            return this.UAMService
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
UamService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("UAM_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UamService);
exports.UamService = UamService;
//# sourceMappingURL=uam.service.js.map