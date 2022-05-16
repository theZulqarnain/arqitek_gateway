import { ClientProxy } from '@nestjs/microservices';
export declare class UamService {
    private readonly UAMService;
    constructor(UAMService: ClientProxy);
    pingServiceA(): import("rxjs").Observable<any>;
    login(req: any, body: any): import("rxjs").Observable<any>;
    validateUserProductOrg(req: any, body: any): import("rxjs").Observable<any>;
    createUser(body: any): import("rxjs").Observable<any>;
    fetchuserOrgs(userId: any): import("rxjs").Observable<any>;
    addOrgToUser(body: any): import("rxjs").Observable<any>;
    fetchorgUsers(query: any): import("rxjs").Observable<any>;
    fetchUserProductRoles(query: any): Promise<any>;
    addUserToProduct(body: any): import("rxjs").Observable<any>;
    userPrograms(query: any): import("rxjs").Observable<any>;
    createPrivilege(body: any): import("rxjs").Observable<any>;
    createRole(body: any): import("rxjs").Observable<any>;
    fetchRoles(query: any): import("rxjs").Observable<any>;
    addPrivilegeToRole(body: any): import("rxjs").Observable<any>;
    createOrg(body: any): import("rxjs").Observable<any>;
    createProduct(body: any): import("rxjs").Observable<any>;
    userProgramsWithParams(query: any): import("rxjs").Observable<any>;
    createProgram(body: any): import("rxjs").Observable<any>;
    addUserToProgram(body: any): import("rxjs").Observable<any>;
    fetchProgramUsers(query: any): import("rxjs").Observable<any>;
    fetchOrgSubscriptions(query: any): import("rxjs").Observable<any>;
    addOrgSubscription(body: any): import("rxjs").Observable<any>;
    updateOrgSubscription(body: any): import("rxjs").Observable<any>;
}
