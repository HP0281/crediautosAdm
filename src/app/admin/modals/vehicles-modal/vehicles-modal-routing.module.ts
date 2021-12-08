import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesModalComponent } from './vehicles-modal.component';

const routes: Routes = [{
  path:"", component: VehiclesModalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesModalRoutingModule { }
