import { All, Body, Controller, Get, Request, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { zip } from "rxjs";
import { map } from "rxjs/operators";
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get("/ping-a")
  // pingServiceA() {
  //   return this.appService.pingServiceA();
  // }
  
  @All(["/fileManager","/fileManager/*"])
  @UseInterceptors(FilesInterceptor('files'))
  async FileManager(@Request() req:any,@UploadedFiles() files) {
    try{
      // console.log('gateway',raw)
      if(files){
        // req.filesData = files;
        // return this.appService.FileManager(req,files)
      }
      return this.appService.FileManager(req)
      // else{
      //   return this.appService.FileManager(req)
      // }
      
      // return {fileManager:"success res"}
    } catch(e){
      console.log(e,'error')
    }
  }
}
