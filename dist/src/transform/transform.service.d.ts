import { ClientProxy } from '@nestjs/microservices';
export declare class TransformService {
    private readonly TRANSFORM_SERVICE;
    constructor(TRANSFORM_SERVICE: ClientProxy);
    pingServiceA(): import("rxjs").Observable<any>;
    getDomainsDetails(): import("rxjs").Observable<any>;
    fetchCanvas(): import("rxjs").Observable<any>;
    fetchRelations(): import("rxjs").Observable<any>;
    fetchProjects(): import("rxjs").Observable<any>;
    geInitiativeList(): import("rxjs").Observable<any>;
    addInitiative(body: any): import("rxjs").Observable<any>;
    getPracticeInitiatives(): import("rxjs").Observable<any>;
    getInitiatives(): import("rxjs").Observable<any>;
    getStages(): import("rxjs").Observable<any>;
    getFeatures(): import("rxjs").Observable<any>;
    getPriorities(): import("rxjs").Observable<any>;
}
