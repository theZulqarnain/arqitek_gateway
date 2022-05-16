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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const environment_1 = require("../config/environment");
const request_enum_1 = require("./interfaces/request.enum");
const formdata_node_1 = require("formdata-node");
const Blob = require("cross-blob");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return 'Hello World!';
    }
    async FileManager(req, filesData = undefined) {
        try {
            const url = `${environment_1.default.FileManagerURL}${req.url}`;
            let reqType = "no data";
            let data = {};
            if (req.method === request_enum_1.default.GET) {
                reqType = "get";
                const test = await this.httpService[reqType](url).toPromise();
                return test.data;
            }
            else if (req.method === request_enum_1.default.POST) {
                reqType = "post";
                let bodyFormData = new formdata_node_1.default();
                bodyFormData.append('files', new Blob([JSON.stringify({
                        files: req.body.files
                    })], {
                    type: req.headers['content-type']
                }), "files");
                bodyFormData.append('type', req.body.type);
                bodyFormData.append('parentId', req.body.parentId);
                console.log(req.headers['accept-encoding'], 'values', req.body.type);
                const test = await this.httpService[reqType](url, JSON.stringify(bodyFormData), {
                    headers: req.headers
                }).toPromise();
                return test.data;
            }
            else if (req.method === request_enum_1.default.PUT) {
                reqType = "put";
                data = req.body;
                const test = await this.httpService[reqType](url, data).toPromise();
                return test.data;
            }
            else if (req.method === request_enum_1.default.PATCH) {
                reqType = "patch";
                data = req.body;
                const test = await this.httpService[reqType](url, data).toPromise();
                return test.data;
            }
            else if (req.method === request_enum_1.default.DELETE) {
                reqType = "delete";
                const test = await this.httpService[reqType](url).toPromise();
                return test.data;
            }
        }
        catch (e) {
            console.log(e.message, 'error');
            return e;
        }
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map