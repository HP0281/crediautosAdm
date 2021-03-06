import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionesComponent } from './versiones.component';

const routes: Routes = [{path: "", component: VersionesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionesRoutingModule { }
