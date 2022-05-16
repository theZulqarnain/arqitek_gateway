import { UamService } from './uam.service';
export declare class UamController {
    private readonly UamService;
    constructor(UamService: UamService);
    pingServiceA(): import("rxjs").Observable<any>;
    login(req: any, Body: any): import("rxjs").Observable<any>;
    validateUserProductOrg(req: any, body: any): import("rxjs").Observable<any>;
    createUser(req: any, Body: any): import("rxjs").Observable<any>;
    fetchuserOrgs(query: any): import("rxjs").Observable<any>;
    addOrgToUser(Body: any): import("rxjs").Observable<any>;
    fetchorgUsers(query: any): import("rxjs").Observable<any>;
    fetchUserProductRoles(query: any): Promise<any>;
    addUserToProduct(Body: any): import("rxjs").Observable<any>;
    userPrograms(query: any): import("rxjs").Observable<any>;
    createPrivilege(Body: any): import("rxjs").Observable<any>;
    createRole(Body: any): import("rxjs").Observable<any>;
    fetchRoles(query: any): import("rxjs").Observable<any>;
    addPrivilegeToRole(Body: any): import("rxjs").Observable<any>;
    createOrg(Body: any): import("rxjs").Observable<any>;
    createProduct(Body: any): import("rxjs").Observable<any>;
    userProgramsWithParams(query: any): import("rxjs").Observable<any>;
    createProgram(Body: any): import("rxjs").Observable<any>;
    addUserToProgram(Body: any): import("rxjs").Observable<any>;
    fetchProgramUsers(query: any): import("rxjs").Observable<any>;
    fetchOrgSubscription(query: any): import("rxjs").Observable<any>;
    addOrgSubscription(req: any, Body: any): import("rxjs").Observable<any>;
    updateOrgSubscription(req: any, Body: any): import("rxjs").Observable<any>;
}
