import { Body, Controller, Get, Patch, Post, Query, Req } from '@nestjs/common';
import {UamService} from './uam.service'
@Controller('uam')
export class UamController {
    constructor(
        private readonly UamService: UamService,
        
        ) {}
    @Get("/")
    pingServiceA() {
        return this.UamService.pingServiceA();
    }

    @Post("/login")
    login(@Req() req: any,@Body() Body:any) {
        return this.UamService.login(req,Body);
    }

    @Post('validateUserProductOrg')
    validateUserProductOrg(@Req() req:any, @Body() body:any){
        return this.UamService.validateUserProductOrg(req,body);
    }
    @Post("/user")
    createUser(@Req() req: any,@Body() Body:any) {
        return this.UamService.createUser(Body);
    }

    @Get("/userOrgs")
    fetchuserOrgs(@Query() query: any) {
        return this.UamService.fetchuserOrgs(query.userId);
    }

    @Post("/userOrgs")
    addOrgToUser(@Body() Body:any) {
        return this.UamService.addOrgToUser(Body);
    }

    @Get("/orgUsers")
    fetchorgUsers(@Query() query: any) {
        return this.UamService.fetchorgUsers(query);
    }

    @Get("/userProduct")
    fetchUserProductRoles(@Query() query: any) {
        return this.UamService.fetchUserProductRoles(query);
    }

    @Post("/userProduct")
    addUserToProduct(@Body() Body:any) {
        return this.UamService.addUserToProduct(Body);
    }

    @Get("/userPrograms")
    userPrograms(@Query() query: any) {
        return this.UamService.userPrograms(query);
    }

    @Post('privilege')
    createPrivilege(@Body() Body:any){
        return this.UamService.createPrivilege(Body);
    }

    @Post('role')
    createRole(@Body() Body:any){
        return this.UamService.createRole(Body);
    }

    @Get("/roles")
    fetchRoles(@Query() query: any) {
        return this.UamService.fetchRoles(query);
    }

    @Post('role/add')
    addPrivilegeToRole(@Body() Body:any){
        return this.UamService.addPrivilegeToRole(Body);
    }

    @Post('org')
    createOrg(@Body() Body:any){
        return this.UamService.createOrg(Body);
    }

    @Post('product')
    createProduct(@Body() Body:any){
        return this.UamService.createProduct(Body);
    }

    @Get("program")
    userProgramsWithParams(@Query() query: any) {
        return this.UamService.userProgramsWithParams(query);
    }

    @Post('program')
    createProgram(@Body() Body:any){
        return this.UamService.createProgram(Body);
    }

    @Post('program/add')
    addUserToProgram(@Body() Body:any){
        return this.UamService.addUserToProgram(Body);
    }

    @Get("/programUsers")
    fetchProgramUsers(@Query() query: any) {
        return this.UamService.fetchProgramUsers(query);
    }

    @Get("/subscription")
    fetchOrgSubscription(@Query() query: any) {
        return this.UamService.fetchOrgSubscriptions(query);
    }

    @Post("/subscription")
    addOrgSubscription(@Req() req: any,@Body() Body:any) {
        return this.UamService.addOrgSubscription(Body);
    }

    @Patch("/subscription")
    updateOrgSubscription(@Req() req: any,@Body() Body:any) {
        return this.UamService.updateOrgSubscription(Body);
    }
}
