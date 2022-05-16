import { HttpService, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import ENVIRONMENT from 'config/environment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import RequestType from './interfaces/request.enum';
import FormData from "formdata-node"
// const FormData = require('form-data');
const Blob = require("cross-blob");
import { serialize } from 'object-to-formdata';
@Injectable()
export class AppService {
  constructor(
    // @Inject("HELLO_SERVICE") private readonly clientServiceA: ClientProxy,
    private httpService: HttpService
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  // pingServiceA() {
  //   const startTs = Date.now();
  //   const pattern = { cmd: "ping" };
  //   const payload = {};
  //   return this.clientServiceA
  //     .send<string>(pattern, payload)
  //     .pipe(
  //       map((message: string) => ({ message, duration: Date.now() - startTs }))
  //     );
  // }


  async FileManager(req:any,filesData:any = undefined): Promise<any>{
    
    try{
      const url = `${ENVIRONMENT.FileManagerURL}${req.url}`;
      let reqType = "no data";
      let data = {} as any;
      if(req.method === RequestType.GET){
        reqType = "get"
        const test =  await this.httpService[reqType](url).toPromise();
        return test.data;
      } else if(req.method === RequestType.POST){
        reqType = "post"
        // console.log(req.headers['content-length'],'length',req.body)
        let bodyFormData = new FormData();

        // bodyFormData.append('type', new Blob([JSON.stringify({
        //   type:req.body.type
        // })], {
        //     type: req.headers['content-type']
        // }));

        // bodyFormData.append('parentId', new Blob([JSON.stringify({
        //   parentId:req.body.parentId
        // })], {
        //     type: req.headers['content-type']
        // }));
        // bodyFormData.append('items', new Blob([JSON.stringify({
        //   type: req.body.type,
        //   parentId: req.body.parentId
        // })], {
        //     type: "application/json"
        // }));

        bodyFormData.append('files', new Blob([JSON.stringify({
            files:req.body.files
        })], {
            type: req.headers['content-type']
        }),"files");
        // console.log(bodyFormData.get('files'),'sdfjklsdjf')
        // bodyFormData.append('type', req.body.type);
        // Object.defineProperty(bodyFormData, 'type',{value: req.body.type});
        // Object.defineProperty(bodyFormData, 'parentId',{value: req.body.parentId});
        bodyFormData.append('type', req.body.type);
        bodyFormData.append('parentId', req.body.parentId);
        // bodyFormData.append('files', req.body.files);

        // for (let i = 0; i < req.files.length; i++) {
        //   bodyFormData.append(req.files[i].name, req.files[i])
        // }
        // data = bodyFormData;
        // let bodyFormData = new FormData();
        // data.type = req.body.type
        // data.parentId = req.body.parentId
        // data.files = req.body.files
        // let demo = serialize(data)
        // console.log(demo,'parse data')
        console.log(req.headers['accept-encoding'],'values',req.body.type)
        // console.log(bodyFormData,'bodyFormData') JSON.stringify(bodyFormData)
        const test =  await this.httpService[reqType](url,JSON.stringify(bodyFormData),{
          headers: req.headers
          // {
          //   // 'Content-Type': req.headers['content-type'],
          //   // 'content-type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
          //   // 'Content-Type': 'application/json',
          //   "Content-Type": req.headers['content-type'],
          //   'Content-Length': req.headers['content-length'],
          //   'Accept-Encoding': req.headers['accept-encoding']
          //   // 'Accept': 'application/json',
          //   // 'Content-Type': undefined
          // }
        }).toPromise();
       
        return test.data;
      }else if(req.method === RequestType.PUT){
        reqType = "put"
        data = req.body;
        const test =  await this.httpService[reqType](url,data).toPromise();
        return test.data;
      }else if(req.method === RequestType.PATCH){
        reqType = "patch"
        data = req.body;
        const test =  await this.httpService[reqType](url,data).toPromise();
        return test.data;
      } else if(req.method === RequestType.DELETE){
        reqType = "delete"
        const test =  await this.httpService[reqType](url).toPromise();
        return test.data;
      }
      // console.log(req.body,'console',data)
      // console.log(req.method,req.body,'enter',req.url,req.originalUrl,req.headers)
      // const test =  await this.httpService[reqType](url,data).toPromise();
      // this.httpService.post(url,data,{headers:{'Content-Type': 'multipart/form-data' }})
      // console.log(test.data,'test')
      // return test.data;
      // return {test:'sdf'}
    } catch(e){
      console.log(e.message,'error')
      return e;
    }
  }
}
// async FileManager(req:any,filesData:any = undefined): Promise<any>{
    
//   try{
//     const url = `${ENVIRONMENT.FileManagerURL}${req.url}`;
//     let reqType = "no data";
//     let data = {} as any;
//     if(req.method === RequestType.GET){
//       reqType = "get"
//     } else if(req.method === RequestType.POST){
//       reqType = "post"
//       // console.log(typeof(filesData),'req.config',filesData,req.body)
//       let bodyFormData = new FormData();
//       bodyFormData.append('type', req.body.type );
//       bodyFormData.append('parentId', req.body.parentId);

//       // for( var i =0; i< filesData.length ; i++ ){
//       //   bodyFormData.append('files' , fs.createReadStream(filesData[i]) );
//       // }
//       bodyFormData.append('files', filesData);
//       const contentLength = await bodyFormData.getLength();
//       // multipart/form-data; boundary=----WebKitFormBoundarydUisu5nugI3JQSfm
//       // multipart/form-data; boundary=----WebKitFormBoundarypj8i4RBIcJsBdikz

//       // data = bodyFormData;

//       // data.type = req.body.type;
//       // data.parentId = req.body.parentId;
//       // data.files = req.files;

//       // data.type = JSON.stringify(req.body.type)
//       // data.parentId = JSON.stringify(req.body.parentId)
//       // data.files = JSON.stringify(req.files)

      
//       const test = await this.httpService[reqType](url,bodyFormData,{
//           headers:{
//             'Content-Type': req.headers['content-type'],
//             'content-length': contentLength,

//           }}).toPromise();
//       return test.data;
//       // const promise = new Promise((resolve) => {
//       //   let bodyFormData = new FormData();
//       //   bodyFormData.append('type', req.body.type );
//       //   bodyFormData.append('parentId', req.body.parentId);
//       //   bodyFormData.append('files', fs.createReadStream(req.files));
//       //   bodyFormData.pipe(concat({ encoding: 'buffer' }, data => resolve({ data, headers: bodyFormData.getHeaders() })));
//       // });
//       // return promise.then(({ data, headers }) => this.httpService.post(`http://localhost:3008/Home/files`,data,{ headers }));
      
//     }else if(req.method === RequestType.PUT){
//       reqType = "put"
//       data = req.body;
//     }else if(req.method === RequestType.PATCH){
//       reqType = "patch"
//       data = req.body;
//     } else if(req.method === RequestType.DELETE){
//       reqType = "delete"
//     }
//     // console.log(req.config.data,'console')
//     // console.log(req.method,req.body,'enter',req.url,req.originalUrl,req.headers)
//     const test =  await this.httpService[reqType](url,data).toPromise();
//     // this.httpService.post(url,data,{headers:{'Content-Type': 'multipart/form-data' }})
//     // console.log(test.data,'test')
//     return test.data;
//     // return {test:'sdf'}
//   } catch(e){
//     console.log(e.message,'error')
//     return e;
//   }
// }







// [Object: null prototype] { type: 'file', parentId: 'Lw' } req.body server
// [
// {
//   fieldname: 'files',
//   originalname: '20.10.15_Qatalyst_UI_Activities Pages_v0.3.2.pptx',
//   encoding: '7bit',
//   mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
//   destination: '/home/zulqarnain/arqitek/arqStore/test-files/',
//   filename: '20.10.15_Qatalyst_UI_Activities Pages_v0.3.2.pptx',
//   path: '/home/zulqarnain/arqitek/arqStore/test-files/20.10.15_Qatalyst_UI_Activities Pages_v0.3.2.pptx',
//   size: 1742727
// }
// ]

// {
//   host: 'localhost:3008',
//   connection: 'keep-alive',
//   'content-length': '1743206',
//   'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
//   'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarytVDf1N71VkAgyY4S',
//   accept: '*/*',
//   origin: 'http://localhost:3001',
//   'sec-fetch-site': 'same-site',
//   'sec-fetch-mode': 'cors',
//   'sec-fetch-dest': 'empty',
//   referer: 'http://localhost:3001/',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-IN,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,ur;q=0.6'
// }

// {
//   accept: 'application/json, text/plain, */*',
//   'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryP1vrQbYeW6ePazgM',
//   'content-length': '296',
//   'user-agent': 'axios/0.21.1',
//   host: 'localhost:3008',
//   connection: 'close'
// }
