import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import ENVIRONMENT from 'config/environment';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'PORTFOLIO_SERVICE', transport: Transport.RMQ,
        options: {
          urls: [`amqp://${ENVIRONMENT.PortfolioQueue.user}:${ENVIRONMENT.PortfolioQueue.password}@${ENVIRONMENT.PortfolioQueue.host}:${ENVIRONMENT.PortfolioQueue.port}/${ENVIRONMENT.PortfolioQueue.VHost}`],
          queue: `${ENVIRONMENT.PortfolioQueue.queue}`,
          queueOptions: {
            durable: false
          },
        },
       },
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
  controllers: [PortfolioController],
  providers: [
    PortfolioService,
  ]
})
export class PortfolioModule {}
