import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable()
export class PortfolioService {
    constructor(
        @Inject("PORTFOLIO_SERVICE") private readonly PORTFOLIO_SERVICE: ClientProxy,
        @Inject("UAM_SERVICE") private readonly UAMService: ClientProxy,
        ) {}

    pingServiceA() {
        const startTs = Date.now();
        const pattern = { cmd: "ping" };
        const payload = [1, 4, 3];
        return this.PORTFOLIO_SERVICE
            .send<any>(pattern, payload)
            // .pipe(
            // map((message: string) => ({ message, duration: Date.now() - startTs }))
            // );
    }

    addStream(body){
        try{
            const pattern = { cmd: "addStream" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateStream(body){
        try{
            const pattern = { cmd: "updateStream" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    fetchStreams(query){
        try{
            const pattern = { cmd: "fetchStreams" };
            const payload = query;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    addMasterPractice(body){
        try{
            const pattern = { cmd: "addMasterPractice" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateMasterPractice(body){
        try{
            const pattern = { cmd: "updateMasterPractice" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchMasterPractices(query){
        try{
            const pattern = { cmd: "getMasterPractices" };
            const payload = query;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addWorkItem(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "addWorkItem" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateWorkItem(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "updateWorkItem" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchWorkItems(query){
        try{
            
            if(query.uam_res){
                const pattern = { cmd: "fetchWorkItems" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addUserWorkItem(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "addUserWorkItem" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateUserWorkItem(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "updateUserWorkItem" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchUserWorkItem(query){
        try{
            if(query.uam_res){
                const pattern = { cmd: "fetchWorkItems" };
                const payload = query;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    addActivity(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "addActivity" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                    .send<any>(pattern, payload)
                    .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }

        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateActivity(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "updateActivity" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchActivities(query){
        try{
            if(query['uam_res']){
                const pattern = { cmd: "fetchActivities" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchUserActivities(query){
        try{
            if(query['uam_res']){
                const pattern = { cmd: "fetchUserActivities" };
                const payload = query;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateUserActivity(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "updateUserActivity" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addUserActivity(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "addUserActivity" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchActivityGroups(query){
        try{
            const pattern = { cmd: "fetchActivityGroups" };
            const payload = query;
            console.log('here grps');
            
            return this.PORTFOLIO_SERVICE
            .send<any>(pattern, payload)
            .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
            return throwError(new HttpException(e.response.message,e.response.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    addPractice(body){
        try{
            if(body['uam_res']){
                // return body['uam_res']
                const pattern = { cmd: "addPractice" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updatePractice(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "updatePractice" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchPractices(query){
        try{
            if(query['uam_res']){
                const pattern = { cmd: "fetchPractices" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            }else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addUserPractice(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "addUserPractice" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            }else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateUserPractice(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "updateUserPractice" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchUserPractice(query){
        try{
            if(query['uam_res']){
                const pattern = { cmd: "fetchUserPractice" };
                const payload = query;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addInitiative(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "addInitiative" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateInitiative(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "updateInitiative" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchInitiatives(query){
        try{
            if(query['uam_res']){
                const pattern = { cmd: "fetchInitiatives" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                    .send<any>(pattern, payload)
                    .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addUserInitiative(body){
        console.log(body,'body');
        
        try{
            if(body['uam_res']){
                const pattern = { cmd: "addUserInitiative" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateUserInitiative(body){
        try{
            if(body['uam_res']){
                const pattern = { cmd: "updateUserInitiative" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    fetchUserInitiatives(query){
        try{
            if(query['uam_res']){
                const pattern = { cmd: "fetchUserInitiatives" };
                const payload = query;
                return this.UAMService
                    .send<any>(pattern, payload)
                    .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            } else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    addScopeArea(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "addScopeArea" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            }else{
                throw new HttpException("Bad request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateScopeArea(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "updateScopeArea" };
                const payload = body;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.response.message,e.response.statusCode))}))
            }else{
                throw new HttpException("Bad request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    fetchScopeAreas(query){
        try{
            if(query.uam_res){
                const pattern = { cmd: "fetchScopeAreas" };
                const payload = query;
                return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.status))}))
            }else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addScopeAreaToUser(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "addScopeAreaToUser" };
                const payload = body;
                return this.UAMService
                .send<any>(pattern, payload)
                .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
            }else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
            
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updateUserScopeArea(body){
        try{
            if(body.uam_res){
                const pattern = { cmd: "updateUserScopeArea" };
                const payload = body;
                return this.UAMService
                    .send<any>(pattern, payload)
                    .pipe(timeout(50000),catchError( e=> { console.log(e, e instanceof RpcException);
                    return throwError(new HttpException(e.message,e.statusCode))}))
            }else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    async fetchUserScopeAreas(query){
        const userScopes = [];
        try{
            const pattern1 = { cmd: "fetchUserScopeAreas" };
            const pattern = { cmd: "fetchScopeAreas" };
            let payload = query;
            // if(query.uam_res && Object.keys(query.uam_res).length > 0 ){
            //     for (const key in query.uam_res) {
            //         if (Object.prototype.hasOwnProperty.call(query.uam_res, key)) {
            //             const element = query.uam_res[key];
            //             userScopes.push({scopeAreaId:element.scopeAreaId,roleId:element.roleId})
            //         }
            //     }
            // }
            // if(userScopes.length){
            //     payload = {...query,userScopes}
            // }
            // console.log(userScopes,'loop',payload);
            if(query.uam_res){
                return this.UAMService
                .send<any>(pattern1, payload)
                .pipe(timeout(50000),
                
                    catchError( e=> { 
                        console.log(e, e instanceof RpcException);
                        return throwError(new HttpException(e.message,e.statusCode))
                })).toPromise()
                // const scopeAreas =  await this.UAMService
                // .send<any>(pattern1, payload)
                // .pipe(timeout(50000),
                
                //     catchError( e=> { 
                //         console.log(e, e instanceof RpcException);
                //         return throwError(new HttpException(e.message,e.statusCode))
                // })).toPromise()

                // if(scopeAreas && Object.keys(scopeAreas).length > 0 ){
                //     for (const key in scopeAreas) {
                //         if (Object.prototype.hasOwnProperty.call(scopeAreas, key)) {
                //             const element = scopeAreas[key];
                //             userScopes.push({scopeAreaId:element.scopeAreaId,roleId:element.roleId})
                //         }
                //     }
                // }
                //     // console.log(scopeAreas,'query msg',userScopes);
                //     // return scopeAreas
                // if(userScopes.length){
                //     payload = {...payload,userScopes}
                //     return this.PORTFOLIO_SERVICE
                //     .send<any>(pattern, payload)
                //     .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                //     return throwError(new HttpException(e.message,e.statusCode))}))
                // } else{
                //     throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
                // }
            }else{
                throw new HttpException("Bad Request",HttpStatus.BAD_REQUEST);
            }
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    geInitiativeList(){
        try{
            const pattern = { cmd: "geInitiativeList" };
            const payload = {};
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    addPracticeInitiative(body){
        try{
            const pattern = { cmd: "addPracticeInitiative" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }

    updatePracticeInitiative(body){
        try{
            const pattern = { cmd: "updatePracticeInitiative" };
            const payload = body;
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
    fetchPracticeInitiatives(query){
        try{
            const pattern = { cmd: "fetchPracticeInitiatives" };
            const payload = query;
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
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
            return this.PORTFOLIO_SERVICE
                .send<any>(pattern, payload)
                .pipe(timeout(10000),catchError( e=> { console.log(e, e instanceof RpcException);
                return throwError(new HttpException(e.message,e.statusCode))}))
        } catch(e){
            throw new HttpException(e,HttpStatus.BAD_REQUEST);
        }
    }
}