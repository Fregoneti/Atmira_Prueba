import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  fecha1:string="2020-09-10";
  fecha2:string="2020-09-11";
  fecha3:string="2020-09-12";
  fecha4:string="2020-09-13";
  fecha5:string="2020-09-14";
  fecha6:string="2020-09-15";

  
  

 constructor(private data:DataService){

 }
  ngOnInit(): void {
   // this.data.getInfo("2020-09-11").subscribe(dat=>console.log(dat));
  }

  getInfo(url:string){
   // this.data.getInfo(url);
    this.data.getInfo(url).subscribe(dat=>{
      console.log(dat)
     
    })
  }


  

}
