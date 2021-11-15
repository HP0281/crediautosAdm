import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModelosComponent } from './new-modelos.component';

const routes: Routes = [{path: "", component: NewModelosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModelosRoutingModule { }
