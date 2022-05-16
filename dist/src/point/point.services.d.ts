import { ClientProxy } from '@nestjs/microservices';
export declare class PointService {
    private readonly POINT_SERVICE;
    private readonly UAMService;
    constructor(POINT_SERVICE: ClientProxy, UAMService: ClientProxy);
    pingpoint(query: any): string;
    getComments(query: any): import("rxjs").Observable<any>;
    addComment(body: any): import("rxjs").Observable<any>;
    updateComment(body: any): import("rxjs").Observable<any>;
    deleteComment(id: any): import("rxjs").Observable<any>;
}
