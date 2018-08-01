import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DforumComponent } from './dforum/dforum.component';


const routes: Routes = [
  {path:'aboutus', component:AboutusComponent},
  {path:'dforum', component:DforumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutusComponent,DforumComponent]
