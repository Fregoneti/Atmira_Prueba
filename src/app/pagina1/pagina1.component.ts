import { Component, OnInit } from '@angular/core';
import { bloque } from '../model/bloque';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  bloque: bloque;
  fecha1: string = "2020-09-10"; fecha2: string = "2020-09-11"; fecha3: string = "2020-09-12"; fecha4: string = "2020-09-13"; fecha5: string = "2020-09-14"; fecha6: string = "2020-09-15";
  pre1: any; pre2: any; pre3: any; pre4: any; pre5: any; pre6: any;
  tit1: string; tit2: string; tit3: string; tit4: string; tit5: string; tit6: string;
  im1:string;im2:string;im3:string;im4:string;im5:string;im6:string;




  constructor(private data: DataService) {

    this.data.getInfo(this.fecha1).subscribe(resp => {
      console.log(resp);
      this.pre1 = resp;
      this.tit1 = this.pre1.title;
      this.im1=this.pre1.url;
    })
    this.data.getInfo(this.fecha2).subscribe(resp => {console.log(resp);
      this.pre2 = resp;
      this.tit2=this.pre2.title;
      this.im2=this.pre2.url;
    })
    this.data.getInfo(this.fecha3).subscribe(resp => {console.log(resp);
      this.pre3 = resp;
        this.tit3=this.pre3.title;
        this.im3=this.pre3.url;
    })
    this.data.getInfo(this.fecha4).subscribe(resp => {console.log(resp);
      this.pre4 = resp;
        this.tit4=this.pre4.title;
        this.im4=this.pre4.url;
    })
    this.data.getInfo(this.fecha5).subscribe(resp => {console.log(resp);
      this.pre5 = resp;
         this.tit5=this.pre5.title;
         this.im5=this.pre5.url;
    })
    this.data.getInfo(this.fecha6).subscribe(resp => {console.log(resp);
      this.pre6 = resp;
          this.tit6=this.pre6.title;
          this.im6=this.pre6.url;
    })

  }
  ngOnInit(): void {
  }

  getInfo(url: string) {
    // this.data.getInfo(url);
    this.data.getInfo(url).subscribe(dat => {
      console.log(dat)

    })
  }




}
