import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      bodyParser: true,
    },
    );
  // app.useGlobalPipes(new ValidationPipe());
//   const rawBodyBuffer = (req, res, buf, encoding) => {
//     if (buf && buf.length) {
//         req.rawBody = buf.toString(encoding || 'utf8');
//     }
// };

// app.use(bodyParser.urlencoded({verify: rawBodyBuffer, extended: true }));
// app.use(bodyParser.json({ verify: rawBodyBuffer }));
  app.enableCors({
    exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type','Content-Length', 'auth_token'],
  });
  await app.listen(3001);
}
bootstrap();
