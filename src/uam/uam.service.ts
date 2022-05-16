import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable()
export class UamService {
    constructor(
        @Inject("UAM_SERVICE") private readonly UAMService: ClientProxy,
        ) {}

    pingServiceA() {
        try{
            const pattern = { cmd: "authUser" };
            const payload = {};
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    login(req,body){
        try{
            const pattern = { cmd: "signin" };
            const payload = {...body,productCode:req.headers.product_code};
            // console.log(payload,'payload')
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response,e.statusCode))}))
        }catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    validateUserProductOrg(req,body){
        try{
            const pattern = { cmd: "validateUserProductOrg" };
            const path = req.route.path;
            const method = req.method;
            // const payload = {...body,productCode:req.headers.product_code};
            const payload = {jwt:req.headers['authorization'],productCode:req.headers['product_code'],feature:path,requestType:method,orgId:req.headers['org_id']}
            // console.log(payload,'payload')
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response,e.statusCode))}))
        }catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    createUser(body){
        try{
            const pattern = { cmd: "createUser" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response,e.statusCode))}))
        } catch(e){
            throw new HttpException(e.message, e.status);
        }
    }
    fetchuserOrgs(userId){
        try{
            const pattern = { cmd: "fetchUserOrgs" };
            const payload = userId;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addOrgToUser(body){
        try{
            const pattern = { cmd: "addOrgToUser" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response,e.statusCode))}))
        } catch(e){
            throw new HttpException(e.message, e.status);
        }
    }

    fetchorgUsers(query){
        try{
            const pattern = { cmd: "fetchorgUsers" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    fetchUserProductRoles(query){
        try{
            const pattern = { cmd: "fetchUserProductRoles" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(5000))
                .toPromise();
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addUserToProduct(body){
        try{
            const pattern = { cmd: "addUserToProduct" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response,e.statusCode))}))
        } catch(e){
            throw new HttpException(e.message, e.status);
        }
    }
    userPrograms(query){
        try{
            const pattern = { cmd: "getUserProgram" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.response,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    createPrivilege(body){
        try{
            const pattern = { cmd: "createPrivilege" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response,e.statusCode))}))
        } catch(e){
            console.log(e,'show');
            
            throw new HttpException(e.message, e.status);
        }
    }

    createRole(body){
        try{
            const pattern = { cmd: "createRole" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchRoles(query){
        try{
            const pattern = { cmd: "fetchRoles" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        }catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addPrivilegeToRole(body){
        try{
            const pattern = { cmd: "addPrivilegeToRole" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    createOrg(body){
        try{
            const pattern = { cmd: "createOrg" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    createProduct(body){
        try{
            const pattern = { cmd: "createProduct" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    userProgramsWithParams(query){
        try{
            const pattern = { cmd: "userProgramsWithParams" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    createProgram(body){
        try{
            const pattern = { cmd: "createProgram" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addUserToProgram(body){
        try{
            const pattern = { cmd: "addUserToProgram" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchProgramUsers(query){
        try{
            const pattern = { cmd: "fetchProgramUsers" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        }catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchOrgSubscriptions(query){
        try{
            const pattern = { cmd: "fetchOrgSubscriptions" };
            const payload = query;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        }catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    addOrgSubscription(body){
        try{
            const pattern = { cmd: "addOrgSubscription" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateOrgSubscription(body){
        try{
            const pattern = { cmd: "updateOrgSubscription" };
            const payload = body;
            return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

}
