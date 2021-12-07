import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesmodalComponent } from './clientesmodal.component';

const routes: Routes = [{
  path:"", component: ClientesmodalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesmodalRoutingModule { }
