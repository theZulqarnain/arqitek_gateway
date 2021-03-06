import { ModuleRef } from '@nestjs/core';
import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly PortfolioService;
    private readonly moduleReference;
    constructor(PortfolioService: PortfolioService, moduleReference: ModuleRef);
    pingServiceA(): import("rxjs").Observable<any>;
    addStream(body: any): import("rxjs").Observable<any>;
    updateStream(body: any): import("rxjs").Observable<any>;
    fetchStreams(query: any): import("rxjs").Observable<any>;
    addMasterPractice(body: any): import("rxjs").Observable<any>;
    updateMasterPractice(body: any): import("rxjs").Observable<any>;
    fetchMasterPractices(query: any): import("rxjs").Observable<any>;
    addPractice(body: any, req: any): import("rxjs").Observable<any>;
    updatePractice(body: any, req: any): import("rxjs").Observable<any>;
    fetchPractices(query: any, req: any): import("rxjs").Observable<any>;
    addUserPractice(body: any, req: any): import("rxjs").Observable<any>;
    updateUserPractice(body: any, req: any): import("rxjs").Observable<any>;
    fetchUserPractice(query: any, param: any, req: any): import("rxjs").Observable<any>;
    addInitiative(body: any, req: any): import("rxjs").Observable<any>;
    updateInitiative(body: any, req: any): import("rxjs").Observable<any>;
    fetchInitiatives(query: any, param: any, req: any): import("rxjs").Observable<any>;
    addUserInitiative(body: any, req: any): import("rxjs").Observable<any>;
    updateUserInitiative(body: any, req: any): import("rxjs").Observable<any>;
    fetchUserInitiatives(query: any, param: any, req: any): import("rxjs").Observable<any>;
    addScopeArea(body: any, req: any): import("rxjs").Observable<any>;
    updateScopeArea(body: any, req: any): import("rxjs").Observable<any>;
    fetchScopeAreas(query: any, req: any): import("rxjs").Observable<any>;
    addScopeAreaToUser(body: any, req: any): import("rxjs").Observable<any>;
    updateUserScopeArea(body: any, req: any): import("rxjs").Observable<any>;
    fetchUserScopeAreas(query: any, param: any, req: any): Promise<any>;
    addWorkItem(body: any, req: any): import("rxjs").Observable<any>;
    updateWorkItem(body: any, req: any): import("rxjs").Observable<any>;
    fetchWorkItems(query: any, req: any): import("rxjs").Observable<any>;
    addUserWorkItem(body: any, req: any): import("rxjs").Observable<any>;
    updateUserWorkItem(body: any, req: any): import("rxjs").Observable<any>;
    fetchUserWorkItem(query: any, param: any, req: any): import("rxjs").Observable<any>;
    addActivity(body: any, req: any): import("rxjs").Observable<any>;
    updateActivity(body: any, req: any): import("rxjs").Observable<any>;
    fetchActivities(query: any, req: any): import("rxjs").Observable<any>;
    addUserActivity(body: any, req: any): import("rxjs").Observable<any>;
    updateUserActivity(body: any, req: any, param: any): import("rxjs").Observable<any>;
    fetchUserActivities(query: any, param: any, req: any): import("rxjs").Observable<any>;
    fetchActivityGroups(query: any, param: any, req: any): import("rxjs").Observable<any>;
    getInitiatives(): import("rxjs").Observable<any>;
    gePracticeList(): import("rxjs").Observable<any>;
    fetchPracticeInitiatives(query: any): import("rxjs").Observable<any>;
    addPracticeInitiative(body: any): import("rxjs").Observable<any>;
    updatePracticeInitiative(payload: any, body: any): import("rxjs").Observable<any>;
    getStages(): import("rxjs").Observable<any>;
    getFeatures(): import("rxjs").Observable<any>;
    getPriority(): import("rxjs").Observable<any>;
}
