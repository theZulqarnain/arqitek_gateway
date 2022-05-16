import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export interface Response<T> {
    data: T;
}
export declare class InitiativeInterceptor<T> implements NestInterceptor<T, Response<T>> {
    private UAM_SERVICE;
    constructor(UAM_SERVICE: ClientProxy);
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>>;
}
