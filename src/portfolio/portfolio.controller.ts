import { Body, Controller, Get, Inject, Param, Patch, Post, Put, Query, Req, Request, UseInterceptors } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ClientProxy, Payload } from '@nestjs/microservices';
import { ActivityInterceptor } from 'src/interceptors/activity.interceptor';
import { InitiativeInterceptor } from 'src/interceptors/initiative.interceptor';
import { PracticeInterceptor } from 'src/interceptors/practice.interceptor';
import { ScopeAreaInterceptor } from 'src/interceptors/scopeArea.interceptor';
import { WorkItemInterceptor } from 'src/interceptors/workItem.interceptor';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
    constructor(
        private readonly PortfolioService: PortfolioService,
        private readonly moduleReference: ModuleRef
        ) {}
    @Get("/")
    pingServiceA() {
        return this.PortfolioService.pingServiceA();
    }

    @Post('/stream')
    addStream(@Body() body:any) {
        return this.PortfolioService.addStream(body);
    }

    @Patch('/stream')
    updateStream(@Body() body:any) {
        return this.PortfolioService.updateStream(body);
    }

    @Get('/stream')
    fetchStreams(@Query() query: any){
        return this.PortfolioService.fetchStreams(query);
    }

    @Post('/addMasterPractice')
    addMasterPractice(@Body() body:any) {
        return this.PortfolioService.addMasterPractice(body);
    }

    @Patch('/updateMasterPractice')
    updateMasterPractice(@Body() body:any) {
        return this.PortfolioService.updateMasterPractice(body);
    }

    @Get('/getMasterPractices')
    fetchMasterPractices(@Query() query: any) {
        return this.PortfolioService.fetchMasterPractices(query);
    }


    @UseInterceptors(new PracticeInterceptor(undefined))
    @Post('/practice')
    addPractice(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addPractice(body);
    }

    @UseInterceptors(new PracticeInterceptor(undefined))
    @Patch('/practice')
    updatePractice(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updatePractice(body);
    }

    @UseInterceptors(new PracticeInterceptor(undefined))
    @Get('/practice')
    fetchPractices(@Query() query: any,@Request() req:any) {
        query = {...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchPractices(query);
    }

    @UseInterceptors(new PracticeInterceptor(undefined))
    @Post('/practice/:userId')
    addUserPractice(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addUserPractice(body);
    }

    @UseInterceptors(new PracticeInterceptor(undefined))
    @Patch('/practice/:userId')
    updateUserPractice(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateUserPractice(body);
    }

    @UseInterceptors(new PracticeInterceptor(undefined))
    @Get('/practice/:userId')
    fetchUserPractice(@Query() query:any,@Param() param:any,@Request() req:any) {
        const params = {...param,...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchUserPractice(params);
    }

    @UseInterceptors(new InitiativeInterceptor(undefined))
    @Post('/initiative')
    addInitiative(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addInitiative(body);
    }

    @UseInterceptors(new InitiativeInterceptor(undefined))
    @Patch('/initiative')
    updateInitiative(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateInitiative(body);
    }

    @UseInterceptors(new InitiativeInterceptor(undefined))
    @Get('/initiative')
    fetchInitiatives(@Query() query: any,@Param() param:any,@Request() req:any) {
        const params = {...param,...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchInitiatives(params);
    }

    @UseInterceptors(new InitiativeInterceptor(undefined))
    @Post('/initiative/:userId')
    addUserInitiative(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addUserInitiative(body);
    }

    @UseInterceptors(new InitiativeInterceptor(undefined))
    @Patch('/initiative/:userId')
    updateUserInitiative(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateUserInitiative(body);
    }

    @UseInterceptors(new InitiativeInterceptor(undefined))
    @Get('/initiative/:userId')
    fetchUserInitiatives(@Query() query:any,@Param() param:any,@Request() req:any) {
        const params = {...param,...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchUserInitiatives(params);
    }

    @UseInterceptors(new ScopeAreaInterceptor(undefined))
    @Post('/scopeArea')
    addScopeArea(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addScopeArea(body);
    }

    @UseInterceptors(new ScopeAreaInterceptor(undefined))
    @Patch('/scopeArea')
    updateScopeArea(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateScopeArea(body);
    }

    @UseInterceptors(new ScopeAreaInterceptor(undefined))
    @Get('/scopeArea')
    fetchScopeAreas(@Query() query: any,@Request() req:any) {
        query = {...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchScopeAreas(query);
    }

    @UseInterceptors(new ScopeAreaInterceptor(undefined))
    @Post('/scopeArea/:userId')
    addScopeAreaToUser(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addScopeAreaToUser(body);
    }

    @UseInterceptors(new ScopeAreaInterceptor(undefined))
    @Patch('/scopeArea/:userId')
    updateUserScopeArea(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateUserScopeArea(body);
    }

    @UseInterceptors(new ScopeAreaInterceptor(undefined))
    @Get('/scopeArea/:userId')
    fetchUserScopeAreas(@Query() query: any,@Param() param:any,@Request() req:any) {
        // console.log(req['uam_res'])
        const params = {...param,...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchUserScopeAreas(params);
    }

    @UseInterceptors(new WorkItemInterceptor(undefined))
    @Post('/workItem')
    addWorkItem(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addWorkItem(body);
    }

    @UseInterceptors(new WorkItemInterceptor(undefined))
    @Patch('/workItem')
    updateWorkItem(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateWorkItem(body);
    }

    @UseInterceptors(new WorkItemInterceptor(undefined))
    @Get('/workItem')
    fetchWorkItems(@Query() query: any,@Request() req:any) {
        query = {...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchWorkItems(query);
    }

    @UseInterceptors(new WorkItemInterceptor(undefined))
    @Post('/workItem/:userId')
    addUserWorkItem(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addUserWorkItem(body);
    }

    @UseInterceptors(new WorkItemInterceptor(undefined))
    @Patch('/workItem/:userId')
    updateUserWorkItem(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateUserWorkItem(body);
    }

    @UseInterceptors(new WorkItemInterceptor(undefined))
    @Get('/workItem/:userId')
    fetchUserWorkItem(@Query() query: any,@Param() param:any,@Request() req:any) {
        // console.log(req['uam_res'])
        const params = {...param,...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchUserWorkItem(params);
    }

    @UseInterceptors(new ActivityInterceptor(undefined))
    @Post('/activity')
    addActivity(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addActivity(body);
    }

    @UseInterceptors(new ActivityInterceptor(undefined))
    @Patch('/activity')
    updateActivity(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.updateActivity(body);
    }

    @UseInterceptors(new ActivityInterceptor(undefined))
    @Get('/activity')
    fetchActivities(@Query() query: any,@Request() req:any) {
        const params = {...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchActivities(params);
    }

    @UseInterceptors(new ActivityInterceptor(undefined))
    @Post('/activity/:userId')
    addUserActivity(@Body() body:any,@Request() req:any) {
        body = {...body,uam_res:req['uam_res']}
        return this.PortfolioService.addUserActivity(body);
    }

    @UseInterceptors(new ActivityInterceptor(undefined))
    @Patch('/activity/:userId')
    updateUserActivity(@Body() body:any,@Request() req:any,@Param() param:any) {
        body = {...body,...param,uam_res:req['uam_res']}
        return this.PortfolioService.updateUserActivity(body);
    }

    @UseInterceptors(new ActivityInterceptor(undefined))
    @Get('/activity/:userId')
    fetchUserActivities(@Query() query: any,@Param() param:any,@Request() req:any) {
        const params = {...param,...query,uam_res:req['uam_res']}
        return this.PortfolioService.fetchUserActivities(params);
    }

    // @UseInterceptors(new ActivityInterceptor(undefined))
    @Get('/Activitygroup')
    fetchActivityGroups(@Query() query: any,@Param() param:any,@Request() req:any) {
        const params = {...param,...query}
        return this.PortfolioService.fetchActivityGroups(params);
    }

    @Get('/getInitiatives')
    getInitiatives() {
        return this.PortfolioService.getInitiatives();
    }

    @Get('/geInitiativeList')
    gePracticeList() {
        return this.PortfolioService.geInitiativeList();
    }

    @Get('/practiceInitiatives')
    fetchPracticeInitiatives(@Query() query: any) {
        return this.PortfolioService.fetchPracticeInitiatives(query);
    }

    @Post('/practiceInitiative')
    addPracticeInitiative(@Body() body:any) {
        return this.PortfolioService.addPracticeInitiative(body);
    }

    @Put('/practiceInitiative')
    updatePracticeInitiative(@Payload() payload:any,@Body() body:any) {
        return this.PortfolioService.updatePracticeInitiative(body ?? payload);
    }

    @Get('/getStages')
    getStages() {
      return this.PortfolioService.getStages();
    }

    @Get('/getFeatures')
    getFeatures() {
        return this.PortfolioService.getFeatures();
    }

    @Get('/getPriorities')
    getPriority() {
        return this.PortfolioService.getPriorities();
    }
}
