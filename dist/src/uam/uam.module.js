"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UamModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const environment_1 = require("../../config/environment");
const uam_controller_1 = require("./uam.controller");
const uam_service_1 = require("./uam.service");
let UamModule = class UamModule {
};
UamModule = __decorate([
    common_1.Module({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'UAM_SERVICE', transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [`amqp://${environment_1.default.UAMQueue.user}:${environment_1.default.UAMQueue.password}@${environment_1.default.UAMQueue.host}:${environment_1.default.UAMQueue.port}/${environment_1.default.UAMQueue.VHost}`],
                        queue: `${environment_1.default.UAMQueue.queue}`,
                        queueOptions: {
                            durable: false
                        },
                    },
                }
            ]),
        ],
        controllers: [uam_controller_1.UamController],
        providers: [uam_service_1.UamService]
    })
], UamModule);
exports.UamModule = UamModule;
//# sourceMappingURL=uam.module.js.map