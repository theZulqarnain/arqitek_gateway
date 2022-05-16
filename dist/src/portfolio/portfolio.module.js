"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const environment_1 = require("../../config/environment");
const portfolio_controller_1 = require("./portfolio.controller");
const portfolio_service_1 = require("./portfolio.service");
let PortfolioModule = class PortfolioModule {
};
PortfolioModule = __decorate([
    common_1.Module({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'PORTFOLIO_SERVICE', transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [`amqp://${environment_1.default.PortfolioQueue.user}:${environment_1.default.PortfolioQueue.password}@${environment_1.default.PortfolioQueue.host}:${environment_1.default.PortfolioQueue.port}/${environment_1.default.PortfolioQueue.VHost}`],
                        queue: `${environment_1.default.PortfolioQueue.queue}`,
                        queueOptions: {
                            durable: false
                        },
                    },
                },
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
        controllers: [portfolio_controller_1.PortfolioController],
        providers: [
            portfolio_service_1.PortfolioService,
        ]
    })
], PortfolioModule);
exports.PortfolioModule = PortfolioModule;
//# sourceMappingURL=portfolio.module.js.map