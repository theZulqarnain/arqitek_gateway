import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import ENVIRONMENT from 'config/environment';
import { UamController } from './uam.controller';
import { UamService } from './uam.service';

// amqp://guest:guest@localhost:5672/hello
@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'UAM_SERVICE', transport: Transport.RMQ,
        options: {
          urls: [`amqp://${ENVIRONMENT.UAMQueue.user}:${ENVIRONMENT.UAMQueue.password}@${ENVIRONMENT.UAMQueue.host}:${ENVIRONMENT.UAMQueue.port}/${ENVIRONMENT.UAMQueue.VHost}`],
          queue: `${ENVIRONMENT.UAMQueue.queue}`,
          queueOptions: {
            durable: false
          },
        },
       }
     ]),
  ],
  controllers: [UamController],
  providers: [UamService]
})
export class UamModule {}
