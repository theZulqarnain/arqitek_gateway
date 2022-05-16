"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const environment_1 = require("../../config/environment");
const transform_controller_1 = require("./transform.controller");
const transform_service_1 = require("./transform.service");
let TransformModule = class TransformModule {
};
TransformModule = __decorate([
    common_1.Module({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'TRANSFORM_SERVICE', transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [`amqp://${environment_1.default.TransformQueue.user}:${environment_1.default.TransformQueue.password}@${environment_1.default.TransformQueue.host}:${environment_1.default.TransformQueue.port}/${environment_1.default.TransformQueue.VHost}`],
                        queue: `${environment_1.default.TransformQueue.queue}`,
                        queueOptions: {
                            durable: false
                        },
                    },
                }
            ]),
        ],
        controllers: [transform_controller_1.TransformController],
        providers: [transform_service_1.TransformService]
    })
], TransformModule);
exports.TransformModule = TransformModule;
//# sourceMappingURL=transform.module.js.map