import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewVehiclesComponent } from './new-vehicles.component';

const routes: Routes = [{path: "", component: NewVehiclesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewVehiclesRoutingModule { }
