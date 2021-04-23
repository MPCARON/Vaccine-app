import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {MaladieComponent} from './maladie/maladie.component';
import {PreventionComponent} from './prevention/prevention.component';
import {TestComponent} from './test/test.component';
import {VaccinComponent} from './vaccin/vaccin.component';

const routes: Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'maladie', component: MaladieComponent},
  {path: 'prevention', component: PreventionComponent},
  {path: 'test', component: TestComponent},
  {path: 'vaccin', component: VaccinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
