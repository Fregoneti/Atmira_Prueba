import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';

@NgModule({
  declarations: [
    AppComponent,Pagina2Component, Pagina1Component
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
