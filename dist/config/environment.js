"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = {
    prod: {
        FileManagerURL: 'http://localhost:3008',
        rabbitMQ: {
            user: 'admin',
            password: 'TechServer',
            host: '146.59.235.235',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'transformDev'
        }
    },
    test: {
        FileManagerURL: 'http://localhost:3008',
        UAMQueue: {
            user: 'admin',
            password: 'TechServer',
            host: '146.59.235.235',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'uamDev'
        },
        TransformQueue: {
            user: 'admin',
            password: 'TechServer',
            host: '146.59.235.235',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'transformDev'
        },
        PortfolioQueue: {
            user: 'admin',
            password: 'TechServer',
            host: '146.59.235.235',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'portfolioDev'
        },
        PointQueue: {
            user: 'admin',
            password: 'TechServer',
            host: '146.59.235.235',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'pointDev'
        }
    },
    local: {
        FileManagerURL: 'http://localhost:3008',
        UAMQueue: {
            user: 'admin',
            password: 'TechServer',
            host: 'localhost',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'uamDev'
        },
        TransformQueue: {
            user: 'admin',
            password: 'TechServer',
            host: 'localhost',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'transformDev'
        },
        PortfolioQueue: {
            user: 'admin',
            password: 'TechServer',
            host: 'localhost',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'portfolioDev'
        },
        PointQueue: {
            user: 'admin',
            password: 'TechServer',
            host: 'localhost',
            port: '5672',
            VHost: 'qatalyst',
            queue: 'pointDev'
        }
    }
};
const ENVIRONMENT = env["test"];
exports.default = ENVIRONMENT;
//# sourceMappingURL=environment.js.map