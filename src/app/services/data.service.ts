import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string;

  constructor(private http:HttpClient) {

    //Funciona correctamente, aunque hay un límite de Get
    this.url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=";


    //Funciona correctamente, ya que no hay numero limitado
    this.url="https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=";
   }
   

  getInfo(fecha:string){
    console.log(this.url+fecha);
    return this.http.get(this.url+fecha);
    
  }
}
