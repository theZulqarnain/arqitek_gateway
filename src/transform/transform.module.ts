import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import ENVIRONMENT from 'config/environment';
import { TransformController } from './transform.controller';
import { TransformService } from './transform.service';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'TRANSFORM_SERVICE', transport: Transport.RMQ,
        options: {
          urls: [`amqp://${ENVIRONMENT.TransformQueue.user}:${ENVIRONMENT.TransformQueue.password}@${ENVIRONMENT.TransformQueue.host}:${ENVIRONMENT.TransformQueue.port}/${ENVIRONMENT.TransformQueue.VHost}`],
          queue: `${ENVIRONMENT.TransformQueue.queue}`,
          queueOptions: {
            durable: false
          },
        },
       }
     ]),
  ],
  controllers: [TransformController],
  providers: [TransformService]
})
export class TransformModule {}
