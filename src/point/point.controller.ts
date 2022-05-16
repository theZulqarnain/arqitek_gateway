import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { PointService } from "./point.services";

@Controller('point')
export class PointController {
    constructor(
        private readonly PointService: PointService,
        private readonly moduleReference: ModuleRef
        ) {}
    @Get("/")
    pingpoint(@Query() query: any) {
        return this.PointService.pingpoint(query)
    }

    @Get("/comment")
    getComments(@Query() query: any) {
        return this.PointService.getComments(query)
    }

    @Post("/comment")
    addComment(@Body() body: any) {
        return this.PointService.addComment(body)
    }

    @Patch("/comment")
    updateComment(@Body() body: any) {
        return this.PointService.updateComment(body)
    }

    @Delete("/comment/:id")
    deleteComment(@Param('id') id: any) {
        return this.PointService.deleteComment(id)
    }
}