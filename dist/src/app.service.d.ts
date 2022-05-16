import { HttpService } from '@nestjs/common';
export declare class AppService {
    private httpService;
    constructor(httpService: HttpService);
    getHello(): string;
    FileManager(req: any, filesData?: any): Promise<any>;
}
