import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=";
   }
   

  getInfo(fecha:string){
    console.log(this.url+fecha);
    return this.http.get(this.url+fecha);
    
  }
}
