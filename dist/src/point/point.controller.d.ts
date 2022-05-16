import { ModuleRef } from "@nestjs/core";
import { PointService } from "./point.services";
export declare class PointController {
    private readonly PointService;
    private readonly moduleReference;
    constructor(PointService: PointService, moduleReference: ModuleRef);
    pingpoint(query: any): string;
    getComments(query: any): import("rxjs").Observable<any>;
    addComment(body: any): import("rxjs").Observable<any>;
    updateComment(body: any): import("rxjs").Observable<any>;
    deleteComment(id: any): import("rxjs").Observable<any>;
}
