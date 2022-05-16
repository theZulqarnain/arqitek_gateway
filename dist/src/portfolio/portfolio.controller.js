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
exports.PortfolioController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const activity_interceptor_1 = require("../interceptors/activity.interceptor");
const initiative_interceptor_1 = require("../interceptors/initiative.interceptor");
const practice_interceptor_1 = require("../interceptors/practice.interceptor");
const scopeArea_interceptor_1 = require("../interceptors/scopeArea.interceptor");
const workItem_interceptor_1 = require("../interceptors/workItem.interceptor");
const portfolio_service_1 = require("./portfolio.service");
let PortfolioController = class PortfolioController {
    constructor(PortfolioService, moduleReference) {
        this.PortfolioService = PortfolioService;
        this.moduleReference = moduleReference;
    }
    pingServiceA() {
        return this.PortfolioService.pingServiceA();
    }
    addStream(body) {
        return this.PortfolioService.addStream(body);
    }
    updateStream(body) {
        return this.PortfolioService.updateStream(body);
    }
    fetchStreams(query) {
        return this.PortfolioService.fetchStreams(query);
    }
    addMasterPractice(body) {
        return this.PortfolioService.addMasterPractice(body);
    }
    updateMasterPractice(body) {
        return this.PortfolioService.updateMasterPractice(body);
    }
    fetchMasterPractices(query) {
        return this.PortfolioService.fetchMasterPractices(query);
    }
    addPractice(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addPractice(body);
    }
    updatePractice(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updatePractice(body);
    }
    fetchPractices(query, req) {
        query = Object.assign(Object.assign({}, query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchPractices(query);
    }
    addUserPractice(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addUserPractice(body);
    }
    updateUserPractice(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateUserPractice(body);
    }
    fetchUserPractice(query, param, req) {
        const params = Object.assign(Object.assign(Object.assign({}, param), query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchUserPractice(params);
    }
    addInitiative(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addInitiative(body);
    }
    updateInitiative(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateInitiative(body);
    }
    fetchInitiatives(query, param, req) {
        const params = Object.assign(Object.assign(Object.assign({}, param), query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchInitiatives(params);
    }
    addUserInitiative(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addUserInitiative(body);
    }
    updateUserInitiative(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateUserInitiative(body);
    }
    fetchUserInitiatives(query, param, req) {
        const params = Object.assign(Object.assign(Object.assign({}, param), query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchUserInitiatives(params);
    }
    addScopeArea(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addScopeArea(body);
    }
    updateScopeArea(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateScopeArea(body);
    }
    fetchScopeAreas(query, req) {
        query = Object.assign(Object.assign({}, query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchScopeAreas(query);
    }
    addScopeAreaToUser(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addScopeAreaToUser(body);
    }
    updateUserScopeArea(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateUserScopeArea(body);
    }
    fetchUserScopeAreas(query, param, req) {
        const params = Object.assign(Object.assign(Object.assign({}, param), query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchUserScopeAreas(params);
    }
    addWorkItem(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addWorkItem(body);
    }
    updateWorkItem(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateWorkItem(body);
    }
    fetchWorkItems(query, req) {
        query = Object.assign(Object.assign({}, query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchWorkItems(query);
    }
    addUserWorkItem(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addUserWorkItem(body);
    }
    updateUserWorkItem(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateUserWorkItem(body);
    }
    fetchUserWorkItem(query, param, req) {
        const params = Object.assign(Object.assign(Object.assign({}, param), query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchUserWorkItem(params);
    }
    addActivity(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addActivity(body);
    }
    updateActivity(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateActivity(body);
    }
    fetchActivities(query, req) {
        const params = Object.assign(Object.assign({}, query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchActivities(params);
    }
    addUserActivity(body, req) {
        body = Object.assign(Object.assign({}, body), { uam_res: req['uam_res'] });
        return this.PortfolioService.addUserActivity(body);
    }
    updateUserActivity(body, req, param) {
        body = Object.assign(Object.assign(Object.assign({}, body), param), { uam_res: req['uam_res'] });
        return this.PortfolioService.updateUserActivity(body);
    }
    fetchUserActivities(query, param, req) {
        const params = Object.assign(Object.assign(Object.assign({}, param), query), { uam_res: req['uam_res'] });
        return this.PortfolioService.fetchUserActivities(params);
    }
    fetchActivityGroups(query, param, req) {
        const params = Object.assign(Object.assign({}, param), query);
        return this.PortfolioService.fetchActivityGroups(params);
    }
    getInitiatives() {
        return this.PortfolioService.getInitiatives();
    }
    gePracticeList() {
        return this.PortfolioService.geInitiativeList();
    }
    fetchPracticeInitiatives(query) {
        return this.PortfolioService.fetchPracticeInitiatives(query);
    }
    addPracticeInitiative(body) {
        return this.PortfolioService.addPracticeInitiative(body);
    }
    updatePracticeInitiative(payload, body) {
        return this.PortfolioService.updatePracticeInitiative(body !== null && body !== void 0 ? body : payload);
    }
    getStages() {
        return this.PortfolioService.getStages();
    }
    getFeatures() {
        return this.PortfolioService.getFeatures();
    }
    getPriority() {
        return this.PortfolioService.getPriorities();
    }
};
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "pingServiceA", null);
__decorate([
    common_1.Post('/stream'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addStream", null);
__decorate([
    common_1.Patch('/stream'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateStream", null);
__decorate([
    common_1.Get('/stream'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchStreams", null);
__decorate([
    common_1.Post('/addMasterPractice'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addMasterPractice", null);
__decorate([
    common_1.Patch('/updateMasterPractice'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateMasterPractice", null);
__decorate([
    common_1.Get('/getMasterPractices'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchMasterPractices", null);
__decorate([
    common_1.UseInterceptors(new practice_interceptor_1.PracticeInterceptor(undefined)),
    common_1.Post('/practice'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addPractice", null);
__decorate([
    common_1.UseInterceptors(new practice_interceptor_1.PracticeInterceptor(undefined)),
    common_1.Patch('/practice'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updatePractice", null);
__decorate([
    common_1.UseInterceptors(new practice_interceptor_1.PracticeInterceptor(undefined)),
    common_1.Get('/practice'),
    __param(0, common_1.Query()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchPractices", null);
__decorate([
    common_1.UseInterceptors(new practice_interceptor_1.PracticeInterceptor(undefined)),
    common_1.Post('/practice/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addUserPractice", null);
__decorate([
    common_1.UseInterceptors(new practice_interceptor_1.PracticeInterceptor(undefined)),
    common_1.Patch('/practice/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateUserPractice", null);
__decorate([
    common_1.UseInterceptors(new practice_interceptor_1.PracticeInterceptor(undefined)),
    common_1.Get('/practice/:userId'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchUserPractice", null);
__decorate([
    common_1.UseInterceptors(new initiative_interceptor_1.InitiativeInterceptor(undefined)),
    common_1.Post('/initiative'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addInitiative", null);
__decorate([
    common_1.UseInterceptors(new initiative_interceptor_1.InitiativeInterceptor(undefined)),
    common_1.Patch('/initiative'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateInitiative", null);
__decorate([
    common_1.UseInterceptors(new initiative_interceptor_1.InitiativeInterceptor(undefined)),
    common_1.Get('/initiative'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchInitiatives", null);
__decorate([
    common_1.UseInterceptors(new initiative_interceptor_1.InitiativeInterceptor(undefined)),
    common_1.Post('/initiative/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addUserInitiative", null);
__decorate([
    common_1.UseInterceptors(new initiative_interceptor_1.InitiativeInterceptor(undefined)),
    common_1.Patch('/initiative/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateUserInitiative", null);
__decorate([
    common_1.UseInterceptors(new initiative_interceptor_1.InitiativeInterceptor(undefined)),
    common_1.Get('/initiative/:userId'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchUserInitiatives", null);
__decorate([
    common_1.UseInterceptors(new scopeArea_interceptor_1.ScopeAreaInterceptor(undefined)),
    common_1.Post('/scopeArea'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addScopeArea", null);
__decorate([
    common_1.UseInterceptors(new scopeArea_interceptor_1.ScopeAreaInterceptor(undefined)),
    common_1.Patch('/scopeArea'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateScopeArea", null);
__decorate([
    common_1.UseInterceptors(new scopeArea_interceptor_1.ScopeAreaInterceptor(undefined)),
    common_1.Get('/scopeArea'),
    __param(0, common_1.Query()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchScopeAreas", null);
__decorate([
    common_1.UseInterceptors(new scopeArea_interceptor_1.ScopeAreaInterceptor(undefined)),
    common_1.Post('/scopeArea/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addScopeAreaToUser", null);
__decorate([
    common_1.UseInterceptors(new scopeArea_interceptor_1.ScopeAreaInterceptor(undefined)),
    common_1.Patch('/scopeArea/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateUserScopeArea", null);
__decorate([
    common_1.UseInterceptors(new scopeArea_interceptor_1.ScopeAreaInterceptor(undefined)),
    common_1.Get('/scopeArea/:userId'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchUserScopeAreas", null);
__decorate([
    common_1.UseInterceptors(new workItem_interceptor_1.WorkItemInterceptor(undefined)),
    common_1.Post('/workItem'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addWorkItem", null);
__decorate([
    common_1.UseInterceptors(new workItem_interceptor_1.WorkItemInterceptor(undefined)),
    common_1.Patch('/workItem'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateWorkItem", null);
__decorate([
    common_1.UseInterceptors(new workItem_interceptor_1.WorkItemInterceptor(undefined)),
    common_1.Get('/workItem'),
    __param(0, common_1.Query()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchWorkItems", null);
__decorate([
    common_1.UseInterceptors(new workItem_interceptor_1.WorkItemInterceptor(undefined)),
    common_1.Post('/workItem/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addUserWorkItem", null);
__decorate([
    common_1.UseInterceptors(new workItem_interceptor_1.WorkItemInterceptor(undefined)),
    common_1.Patch('/workItem/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateUserWorkItem", null);
__decorate([
    common_1.UseInterceptors(new workItem_interceptor_1.WorkItemInterceptor(undefined)),
    common_1.Get('/workItem/:userId'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchUserWorkItem", null);
__decorate([
    common_1.UseInterceptors(new activity_interceptor_1.ActivityInterceptor(undefined)),
    common_1.Post('/activity'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addActivity", null);
__decorate([
    common_1.UseInterceptors(new activity_interceptor_1.ActivityInterceptor(undefined)),
    common_1.Patch('/activity'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateActivity", null);
__decorate([
    common_1.UseInterceptors(new activity_interceptor_1.ActivityInterceptor(undefined)),
    common_1.Get('/activity'),
    __param(0, common_1.Query()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchActivities", null);
__decorate([
    common_1.UseInterceptors(new activity_interceptor_1.ActivityInterceptor(undefined)),
    common_1.Post('/activity/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addUserActivity", null);
__decorate([
    common_1.UseInterceptors(new activity_interceptor_1.ActivityInterceptor(undefined)),
    common_1.Patch('/activity/:userId'),
    __param(0, common_1.Body()), __param(1, common_1.Request()), __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updateUserActivity", null);
__decorate([
    common_1.UseInterceptors(new activity_interceptor_1.ActivityInterceptor(undefined)),
    common_1.Get('/activity/:userId'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchUserActivities", null);
__decorate([
    common_1.Get('/Activitygroup'),
    __param(0, common_1.Query()), __param(1, common_1.Param()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchActivityGroups", null);
__decorate([
    common_1.Get('/getInitiatives'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "getInitiatives", null);
__decorate([
    common_1.Get('/geInitiativeList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "gePracticeList", null);
__decorate([
    common_1.Get('/practiceInitiatives'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "fetchPracticeInitiatives", null);
__decorate([
    common_1.Post('/practiceInitiative'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "addPracticeInitiative", null);
__decorate([
    common_1.Put('/practiceInitiative'),
    __param(0, microservices_1.Payload()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "updatePracticeInitiative", null);
__decorate([
    common_1.Get('/getStages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "getStages", null);
__decorate([
    common_1.Get('/getFeatures'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "getFeatures", null);
__decorate([
    common_1.Get('/getPriorities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "getPriority", null);
PortfolioController = __decorate([
    common_1.Controller('portfolio'),
    __metadata("design:paramtypes", [portfolio_service_1.PortfolioService,
        core_1.ModuleRef])
], PortfolioController);
exports.PortfolioController = PortfolioController;
//# sourceMappingURL=portfolio.controller.js.map