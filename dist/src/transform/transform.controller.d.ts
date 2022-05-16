import { TransformService } from './transform.service';
export declare class TransformController {
    private readonly TransformService;
    constructor(TransformService: TransformService);
    pingServiceA(): import("rxjs").Observable<any>;
    getHellos(): import("rxjs").Observable<any>;
    fetchCanvas(): import("rxjs").Observable<any>;
    fetchRelations(): import("rxjs").Observable<any>;
    fetchProjects(): import("rxjs").Observable<any>;
    gePracticeList(): import("rxjs").Observable<any>;
    addInitiative(body: any): import("rxjs").Observable<any>;
    getPracticeInitiatives(): import("rxjs").Observable<any>;
    getInitiatives(): import("rxjs").Observable<any>;
    getStages(): import("rxjs").Observable<any>;
    getFeatures(): import("rxjs").Observable<any>;
    getPriority(): import("rxjs").Observable<any>;
}
