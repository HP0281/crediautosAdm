import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionesComponent } from './versiones.component';

const routes: Routes = [
  {path: '',component:VersionesComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
 // { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
  {path: '**', redirectTo: 'dasboard', pathMatch: 'full'}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionesRoutingModule { }
