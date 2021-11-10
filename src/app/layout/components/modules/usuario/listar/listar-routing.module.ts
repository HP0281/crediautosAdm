import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar.component';



const routes: Routes = [
  {path: '',component: ListarComponent}
 // { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarRoutingModule { }
