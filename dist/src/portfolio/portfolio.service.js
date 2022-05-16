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
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let PortfolioService = class PortfolioService {
    constructor(PORTFOLIO_SERVICE, UAMService) {
        this.PORTFOLIO_SERVICE = PORTFOLIO_SERVICE;
        this.UAMService = UAMService;
    }
    pingServiceA() {
        const startTs = Date.now();
        const pattern = { cmd: "ping" };
        const payload = [1, 4, 3];
        return this.PORTFOLIO_SERVICE
            .send(pattern, payload);
    }
    addStream(body) {
        try {
            const pattern = { cmd: "addStream" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateStream(body) {
        try {
            const pattern = { cmd: "updateStream" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchStreams(query) {
        try {
            const pattern = { cmd: "fetchStreams" };
            const payload = query;
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addMasterPractice(body) {
        try {
            const pattern = { cmd: "addMasterPractice" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateMasterPractice(body) {
        try {
            const pattern = { cmd: "updateMasterPractice" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchMasterPractices(query) {
        try {
            const pattern = { cmd: "getMasterPractices" };
            const payload = query;
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addWorkItem(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "addWorkItem" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateWorkItem(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "updateWorkItem" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchWorkItems(query) {
        try {
            if (query.uam_res) {
                const pattern = { cmd: "fetchWorkItems" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addUserWorkItem(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "addUserWorkItem" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateUserWorkItem(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "updateUserWorkItem" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchUserWorkItem(query) {
        try {
            if (query.uam_res) {
                const pattern = { cmd: "fetchWorkItems" };
                const payload = query;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addActivity(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "addActivity" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateActivity(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "updateActivity" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchActivities(query) {
        try {
            if (query['uam_res']) {
                const pattern = { cmd: "fetchActivities" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchUserActivities(query) {
        try {
            if (query['uam_res']) {
                const pattern = { cmd: "fetchUserActivities" };
                const payload = query;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateUserActivity(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "updateUserActivity" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addUserActivity(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "addUserActivity" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchActivityGroups(query) {
        try {
            const pattern = { cmd: "fetchActivityGroups" };
            const payload = query;
            console.log('here grps');
            return this.PORTFOLIO_SERVICE
                .send(pattern, payload)
                .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                console.log(e, e instanceof microservices_1.RpcException);
                return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
            }));
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addPractice(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "addPractice" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updatePractice(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "updatePractice" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchPractices(query) {
        try {
            if (query['uam_res']) {
                const pattern = { cmd: "fetchPractices" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addUserPractice(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "addUserPractice" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateUserPractice(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "updateUserPractice" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchUserPractice(query) {
        try {
            if (query['uam_res']) {
                const pattern = { cmd: "fetchUserPractice" };
                const payload = query;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addInitiative(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "addInitiative" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateInitiative(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "updateInitiative" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchInitiatives(query) {
        try {
            if (query['uam_res']) {
                const pattern = { cmd: "fetchInitiatives" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addUserInitiative(body) {
        console.log(body, 'body');
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "addUserInitiative" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateUserInitiative(body) {
        try {
            if (body['uam_res']) {
                const pattern = { cmd: "updateUserInitiative" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchUserInitiatives(query) {
        try {
            if (query['uam_res']) {
                const pattern = { cmd: "fetchUserInitiatives" };
                const payload = query;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addScopeArea(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "addScopeArea" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateScopeArea(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "updateScopeArea" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(10000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.response.message, e.response.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    fetchScopeAreas(query) {
        try {
            if (query.uam_res) {
                const pattern = { cmd: "fetchScopeAreas" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.status));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    addScopeAreaToUser(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "addScopeAreaToUser" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    updateUserScopeArea(body) {
        try {
            if (body.uam_res) {
                const pattern = { cmd: "updateUserScopeArea" };
                const payload = body;
                return this.UAMService
                    .send(pattern, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                }));
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchUserScopeAreas(query) {
        const userScopes = [];
        try {
            const pattern1 = { cmd: "fetchUserScopeAreas" };
            const pattern = { cmd: "fetchScopeAreas" };
            let payload = query;
            if (query.uam_res) {
                return this.UAMService
                    .send(pattern1, payload)
                    .pipe(operators_1.timeout(50000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.statusCode));
                })).toPromise();
            }
            else {
                throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    geInitiativeList() {
        try {
            const pattern = { cmd: "geInitiativeList" };
            const payload = {};
            return this.PORTFOLIO_SERVICE
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
    addPracticeInitiative(body) {
        try {
            const pattern = { cmd: "addPracticeInitiative" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
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
    updatePracticeInitiative(body) {
        try {
            const pattern = { cmd: "updatePracticeInitiative" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
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
    fetchPracticeInitiatives(query) {
        try {
            const pattern = { cmd: "fetchPracticeInitiatives" };
            const payload = query;
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
PortfolioService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("PORTFOLIO_SERVICE")),
    __param(1, common_1.Inject("UAM_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], PortfolioService);
exports.PortfolioService = PortfolioService;
//# sourceMappingURL=portfolio.service.js.map