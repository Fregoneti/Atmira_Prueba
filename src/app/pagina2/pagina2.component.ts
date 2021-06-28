import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bloque } from '../model/bloque';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  fecha: string;
  pre: any;
  imagen:any;
  explicacion:any;

  constructor(private _route: ActivatedRoute, private data: DataService) {

    this.fecha = this._route.snapshot.paramMap.get('fecha');
    console.log(this.fecha);
    this.data.getInfo(this.fecha).subscribe(resp => {
      this.pre = resp;
      this.imagen=this.pre.url;
      this.explicacion=this.pre.explanation;
     console.log(this.imagen);
     console.log(this.explicacion);
    })
  }

  ngOnInit(): void {

  }

}
