import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { TransformService } from './transform.service';

@Controller('transform')
export class TransformController {
    constructor(
        private readonly TransformService: TransformService,
        
        ) {}
    @Get("/")
    pingServiceA() {
        return this.TransformService.pingServiceA();
    }


    @Get('/getDomainsDetails')
    getHellos() {
      return this.TransformService.getDomainsDetails();
    }

    @Get('/fetchCanvas')
    fetchCanvas() {
        return this.TransformService.fetchCanvas();
    }

    @Get('/fetchRelations')
    fetchRelations() {
        return this.TransformService.fetchRelations();
    }

    @Get('/fetchProjects')
    fetchProjects() {
        return this.TransformService.fetchProjects();
    }

    @Get('/geInitiativeList')
    gePracticeList() {
        return this.TransformService.geInitiativeList();
    }

    @Post('/initiative')
    addInitiative(@Body() body:any) {
        return this.TransformService.addInitiative(body);
    }

    @Get('/getPracticeInitiatives')
    getPracticeInitiatives() {
        return this.TransformService.getPracticeInitiatives();
    }

    @Get('/getInitiatives')
    getInitiatives() {
        return this.TransformService.getInitiatives();
    }

    @Get('/getStages')
    getStages() {
      return this.TransformService.getStages();
    }

    @Get('/getFeatures')
    getFeatures() {
        return this.TransformService.getFeatures();
    }

    @Get('/getPriorities')
    getPriority() {
        return this.TransformService.getPriorities();
    }
}
