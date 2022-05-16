"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyParser = require('body-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: true,
    });
    app.enableCors({
        exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Content-Length', 'auth_token'],
    });
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map