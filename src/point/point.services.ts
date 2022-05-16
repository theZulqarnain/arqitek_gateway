import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';


@Injectable()
export class PointService {
    constructor(
        @Inject("POINT_SERVICE") private readonly POINT_SERVICE: ClientProxy,
        @Inject("UAM_SERVICE") private readonly UAMService: ClientProxy,
    ) {}

    pingpoint(query) {
        try{
            return "Point root API"
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    getComments(query) {
        try{
            const pattern = "getComments";
            const payload = query;
            return this.POINT_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addComment(body){
        try{
            const pattern = "addComment";
            const payload = body;
            return this.POINT_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateComment(body){
        try{
            const pattern = "updateComment";
            const payload = body;
            return this.POINT_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    deleteComment(id){
        try{
            const pattern = "deleteComment";
            const payload = id;
            return this.POINT_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
}