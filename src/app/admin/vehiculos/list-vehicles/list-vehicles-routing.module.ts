import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVersionesComponent } from '../../versiones/list-versiones/list-versiones.component';

const routes: Routes = [{path: "", component: ListVersionesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListVehiclesRoutingModule { }
