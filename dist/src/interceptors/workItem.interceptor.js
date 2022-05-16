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
exports.WorkItemInterceptor = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const environment_1 = require("../../config/environment");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let WorkItemInterceptor = class WorkItemInterceptor {
    constructor(UAM_SERVICE) {
        this.UAM_SERVICE = UAM_SERVICE;
        if (!this.UAM_SERVICE) {
            this.UAM_SERVICE = microservices_1.ClientProxyFactory.create({
                transport: microservices_1.Transport.RMQ,
                options: {
                    urls: [`amqp://${environment_1.default.UAMQueue.user}:${environment_1.default.UAMQueue.password}@${environment_1.default.UAMQueue.host}:${environment_1.default.UAMQueue.port}/${environment_1.default.UAMQueue.VHost}`],
                    queue: `${environment_1.default.UAMQueue.queue}`,
                    queueOptions: {
                        durable: false
                    },
                }
            });
            this.UAM_SERVICE.connect();
        }
    }
    intercept(context, next) {
        try {
            const req = context.switchToHttp().getRequest();
            const path = req.route.path;
            const method = req.method;
            const pattern = { cmd: "validateUserWorkItems" };
            if (req.headers['authorization'] && req.headers['product_code'] && path && method && req.headers['org_id']) {
                let payload = { jwt: req.headers['authorization'], productCode: req.headers['product_code'], feature: path, requestType: method, orgId: req.headers['org_id'], requestedBy: req.headers['requested_by'] };
                if (req.query) {
                    payload = Object.assign(Object.assign({}, payload), req.query);
                }
                if (req.body) {
                    payload = Object.assign(Object.assign({}, payload), req.body);
                }
                if (req.params) {
                    payload = Object.assign(Object.assign({}, payload), req.params);
                }
                return this.UAM_SERVICE
                    .send(pattern, payload)
                    .pipe(operators_1.switchMap((uam_res) => {
                    req['uam_res'] = uam_res;
                    console.log(req['uam_res'], 'req res');
                    return next.handle();
                }), operators_1.timeout(10000), operators_1.catchError(e => {
                    console.log(e, e instanceof microservices_1.RpcException);
                    return rxjs_1.throwError(new common_1.HttpException(e.message, e.status));
                }));
            }
            else {
                return rxjs_1.throwError(new common_1.HttpException("Headers not found", common_1.HttpStatus.UNAUTHORIZED));
            }
        }
        catch (e) {
            console.log(e, 'error');
            throw new common_1.HttpException(e, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
WorkItemInterceptor = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("UAM_SERVICE")),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], WorkItemInterceptor);
exports.WorkItemInterceptor = WorkItemInterceptor;
//# sourceMappingURL=workItem.interceptor.js.map