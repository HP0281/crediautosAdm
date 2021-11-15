import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewVersionesComponent } from './new-versiones.component';

const routes: Routes = [{
  path: "", component: NewVersionesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewVersionesRoutingModule { }
