import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  {path: '', component:ClientesComponent, pathMatch: 'prefix'},
  { path: 'listar', loadChildren: () => import('./list-client/list-client.module').then(m => m.ListClientModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
