import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable()
export class TransformService {
    constructor(
        @Inject("TRANSFORM_SERVICE") private readonly TRANSFORM_SERVICE: ClientProxy,
        ) {}

    pingServiceA() {
        const startTs = Date.now();
        const pattern = { cmd: "ping" };
        const payload = [1, 4, 3];
        return this.TRANSFORM_SERVICE
            .send<any>(pattern, payload)
            // .pipe(
            // map((message: string) => ({ message, duration: Date.now() - startTs }))
            // );
    }

    getDomainsDetails(){
        try{
            const pattern = { cmd: "getDomainsDetails" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchCanvas(){
        try{
            const pattern = { cmd: "fetchCanvas" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchRelations(){
        try{
            const pattern = { cmd: "fetchRelations" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchProjects(){
        try{
            const pattern = { cmd: "fetchProjects" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    geInitiativeList(){
        try{
            const pattern = { cmd: "geInitiativeList" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addInitiative(body){
        try{
            const pattern = { cmd: "addInitiative" };
            const payload = body;
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    getPracticeInitiatives(){
        try{
            const pattern = { cmd: "getPracticeInitiatives" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    getInitiatives(){
        try{
            const pattern = { cmd: "getInitiatives" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    getStages(){
        try{
            const pattern = { cmd: "getStages" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    getFeatures(){
        try{
            const pattern = { cmd: "getFeatures" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    getPriorities(){
        try{
            const pattern = { cmd: "getPriorities" };
            const payload = {};
            return this.TRANSFORM_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
}