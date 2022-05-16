import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, RpcException, Transport } from '@nestjs/microservices';
import ENVIRONMENT from 'config/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, timeout } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ScopeAreaInterceptor<T> implements NestInterceptor<T, Response<T>> {
    constructor(
        @Inject("UAM_SERVICE") private UAM_SERVICE: ClientProxy,
    ) {
      if(!this.UAM_SERVICE){
        this.UAM_SERVICE = ClientProxyFactory.create({
          transport: Transport.RMQ,
          options:{
            urls: [`amqp://${ENVIRONMENT.UAMQueue.user}:${ENVIRONMENT.UAMQueue.password}@${ENVIRONMENT.UAMQueue.host}:${ENVIRONMENT.UAMQueue.port}/${ENVIRONMENT.UAMQueue.VHost}`],
            queue: `${ENVIRONMENT.UAMQueue.queue}`,
            queueOptions: {
              durable: false
            },
          }
        })
        this.UAM_SERVICE.connect()
      }
    }
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    try{
        const req = context.switchToHttp().getRequest();
        const path = req.route.path;
        const method = req.method;
        // console.log(req.headers,'request');
        const pattern = { cmd: "validateUserScopeAreas" };
        if(req.headers['authorization'] && req.headers['product_code'] && path && method && req.headers['org_id']){
            let payload = {jwt:req.headers['authorization'],productCode:req.headers['product_code'],feature:path,requestType:method,orgId:req.headers['org_id'],requestedBy:req.headers['requested_by']};
            if(req.query){
                // console.log('query',req.query);
                
                payload = {...payload,...req.query}
            }

            if(req.body){
                // console.log('query',req.query);
                
                payload = {...payload,...req.body}
            }

            if(req.params){
                // console.log('params',req.params);
                
                payload = {...payload,...req.params}
            }
            // console.log(payload,'payload');
            
            return this.UAM_SERVICE
                .send<any>(pattern, payload)
                .pipe(
                    switchMap((uam_res) => {
                    req['uam_res'] = uam_res;
                    //   console.log(req['uam_res'],'req res')
                    return next.handle()
                    }),
                    timeout(10000),
                    catchError( e=> { console.log(e, e instanceof RpcException);
                        return throwError(new HttpException(e.message,e.status))}
                    )
                )
        } else{
            // throw new HttpException("Headers not found".UNAUTHORIZED);
            return throwError(new HttpException("Headers not found",HttpStatus.UNAUTHORIZED))
        }
    } catch(e){
        console.log(e,'error')
        throw new HttpException(e,HttpStatus.UNAUTHORIZED);
    }
  }
}