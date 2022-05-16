import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UamModule } from './uam/uam.module';
import { TransformModule } from './transform/transform.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PointModule } from './point/point.module';

@Module({
  imports: [
    HttpModule,
    // ClientsModule.register([
    //    { 
    //     name: 'HAO_SERVICE', transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://admin:TechServer@146.59.235.235:5672/qatalyst'],
    //       queue: 'arq-point',
    //       queueOptions: {
    //         durable: false
    //             },
    //       },
    //    },
    //  ]),
    UamModule,
    TransformModule,
    PortfolioModule,
    PointModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
