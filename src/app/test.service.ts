import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
private data:string[]=[];
private counter:number=0;
  constructor() {
    console.log("service cree avec succes");
   }
   addData(e:string):void{
    this.data.push(e);
   }

   getData():string[]{
    return this.data;
   }

   getDataCount():number{
    return this.data.length;
   }

   clearData():void{
    this.data=[];
   }
}
