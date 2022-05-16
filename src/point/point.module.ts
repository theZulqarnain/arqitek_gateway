import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import ENVIRONMENT from 'config/environment';
import { PointController } from './point.controller';
import { PointService } from './point.services';


@Module({
  imports: [
    ClientsModule.register([
        { 
          name: 'POINT_SERVICE', transport: Transport.RMQ,
          options: {
            urls: [`amqp://${ENVIRONMENT.PointQueue.user}:${ENVIRONMENT.PointQueue.password}@${ENVIRONMENT.PointQueue.host}:${ENVIRONMENT.PointQueue.port}/${ENVIRONMENT.PointQueue.VHost}`],
            queue: `${ENVIRONMENT.PointQueue.queue}`,
            queueOptions: {
              durable: false,
              arguments: {
                'x-queue-type': 'classic'
                },
            },
          },
         },
         { 
          name: 'UAM_SERVICE', transport: Transport.RMQ,
          options: {
            urls: [`amqp://${ENVIRONMENT.UAMQueue.user}:${ENVIRONMENT.UAMQueue.password}@${ENVIRONMENT.UAMQueue.host}:${ENVIRONMENT.UAMQueue.port}/${ENVIRONMENT.UAMQueue.VHost}`],
            queue: `${ENVIRONMENT.UAMQueue.queue}`,
            queueOptions: {
              durable: false,
            },
          },
         }
       ]),
  ],
  controllers: [PointController],
  providers: [
    PointService,
  ],
})
export class PointModule {}
