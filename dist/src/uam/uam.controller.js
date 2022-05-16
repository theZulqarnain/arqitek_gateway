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
exports.UamController = void 0;
const common_1 = require("@nestjs/common");
const uam_service_1 = require("./uam.service");
let UamController = class UamController {
    constructor(UamService) {
        this.UamService = UamService;
    }
    pingServiceA() {
        return this.UamService.pingServiceA();
    }
    login(req, Body) {
        return this.UamService.login(req, Body);
    }
    validateUserProductOrg(req, body) {
        return this.UamService.validateUserProductOrg(req, body);
    }
    createUser(req, Body) {
        return this.UamService.createUser(Body);
    }
    fetchuserOrgs(query) {
        return this.UamService.fetchuserOrgs(query.userId);
    }
    addOrgToUser(Body) {
        return this.UamService.addOrgToUser(Body);
    }
    fetchorgUsers(query) {
        return this.UamService.fetchorgUsers(query);
    }
    fetchUserProductRoles(query) {
        return this.UamService.fetchUserProductRoles(query);
    }
    addUserToProduct(Body) {
        return this.UamService.addUserToProduct(Body);
    }
    userPrograms(query) {
        return this.UamService.userPrograms(query);
    }
    createPrivilege(Body) {
        return this.UamService.createPrivilege(Body);
    }
    createRole(Body) {
        return this.UamService.createRole(Body);
    }
    fetchRoles(query) {
        return this.UamService.fetchRoles(query);
    }
    addPrivilegeToRole(Body) {
        return this.UamService.addPrivilegeToRole(Body);
    }
    createOrg(Body) {
        return this.UamService.createOrg(Body);
    }
    createProduct(Body) {
        return this.UamService.createProduct(Body);
    }
    userProgramsWithParams(query) {
        return this.UamService.userProgramsWithParams(query);
    }
    createProgram(Body) {
        return this.UamService.createProgram(Body);
    }
    addUserToProgram(Body) {
        return this.UamService.addUserToProgram(Body);
    }
    fetchProgramUsers(query) {
        return this.UamService.fetchProgramUsers(query);
    }
    fetchOrgSubscription(query) {
        return this.UamService.fetchOrgSubscriptions(query);
    }
    addOrgSubscription(req, Body) {
        return this.UamService.addOrgSubscription(Body);
    }
    updateOrgSubscription(req, Body) {
        return this.UamService.updateOrgSubscription(Body);
    }
};
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UamController.prototype, "pingServiceA", null);
__decorate([
    common_1.Post("/login"),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "login", null);
__decorate([
    common_1.Post('validateUserProductOrg'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "validateUserProductOrg", null);
__decorate([
    common_1.Post("/user"),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "createUser", null);
__decorate([
    common_1.Get("/userOrgs"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "fetchuserOrgs", null);
__decorate([
    common_1.Post("/userOrgs"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "addOrgToUser", null);
__decorate([
    common_1.Get("/orgUsers"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "fetchorgUsers", null);
__decorate([
    common_1.Get("/userProduct"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "fetchUserProductRoles", null);
__decorate([
    common_1.Post("/userProduct"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "addUserToProduct", null);
__decorate([
    common_1.Get("/userPrograms"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "userPrograms", null);
__decorate([
    common_1.Post('privilege'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "createPrivilege", null);
__decorate([
    common_1.Post('role'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "createRole", null);
__decorate([
    common_1.Get("/roles"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "fetchRoles", null);
__decorate([
    common_1.Post('role/add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "addPrivilegeToRole", null);
__decorate([
    common_1.Post('org'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "createOrg", null);
__decorate([
    common_1.Post('product'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "createProduct", null);
__decorate([
    common_1.Get("program"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "userProgramsWithParams", null);
__decorate([
    common_1.Post('program'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "createProgram", null);
__decorate([
    common_1.Post('program/add'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "addUserToProgram", null);
__decorate([
    common_1.Get("/programUsers"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "fetchProgramUsers", null);
__decorate([
    common_1.Get("/subscription"),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "fetchOrgSubscription", null);
__decorate([
    common_1.Post("/subscription"),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "addOrgSubscription", null);
__decorate([
    common_1.Patch("/subscription"),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UamController.prototype, "updateOrgSubscription", null);
UamController = __decorate([
    common_1.Controller('uam'),
    __metadata("design:paramtypes", [uam_service_1.UamService])
], UamController);
exports.UamController = UamController;
//# sourceMappingURL=uam.controller.js.map