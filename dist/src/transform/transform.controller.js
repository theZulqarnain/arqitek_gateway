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
exports.TransformController = void 0;
const common_1 = require("@nestjs/common");
const transform_service_1 = require("./transform.service");
let TransformController = class TransformController {
    constructor(TransformService) {
        this.TransformService = TransformService;
    }
    pingServiceA() {
        return this.TransformService.pingServiceA();
    }
    getHellos() {
        return this.TransformService.getDomainsDetails();
    }
    fetchCanvas() {
        return this.TransformService.fetchCanvas();
    }
    fetchRelations() {
        return this.TransformService.fetchRelations();
    }
    fetchProjects() {
        return this.TransformService.fetchProjects();
    }
    gePracticeList() {
        return this.TransformService.geInitiativeList();
    }
    addInitiative(body) {
        return this.TransformService.addInitiative(body);
    }
    getPracticeInitiatives() {
        return this.TransformService.getPracticeInitiatives();
    }
    getInitiatives() {
        return this.TransformService.getInitiatives();
    }
    getStages() {
        return this.TransformService.getStages();
    }
    getFeatures() {
        return this.TransformService.getFeatures();
    }
    getPriority() {
        return this.TransformService.getPriorities();
    }
};
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "pingServiceA", null);
__decorate([
    common_1.Get('/getDomainsDetails'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "getHellos", null);
__decorate([
    common_1.Get('/fetchCanvas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "fetchCanvas", null);
__decorate([
    common_1.Get('/fetchRelations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "fetchRelations", null);
__decorate([
    common_1.Get('/fetchProjects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "fetchProjects", null);
__decorate([
    common_1.Get('/geInitiativeList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "gePracticeList", null);
__decorate([
    common_1.Post('/initiative'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "addInitiative", null);
__decorate([
    common_1.Get('/getPracticeInitiatives'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "getPracticeInitiatives", null);
__decorate([
    common_1.Get('/getInitiatives'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "getInitiatives", null);
__decorate([
    common_1.Get('/getStages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "getStages", null);
__decorate([
    common_1.Get('/getFeatures'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "getFeatures", null);
__decorate([
    common_1.Get('/getPriorities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransformController.prototype, "getPriority", null);
TransformController = __decorate([
    common_1.Controller('transform'),
    __metadata("design:paramtypes", [transform_service_1.TransformService])
], TransformController);
exports.TransformController = TransformController;
//# sourceMappingURL=transform.controller.js.map