import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
  {path:'', component:Pagina1Component },
  {path:'home', component:Pagina1Component },
  {path:'info/:fecha', component:Pagina2Component },
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
