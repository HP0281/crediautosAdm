import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';



const routes: Routes = [
  {path: '',component: UsuarioComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
  { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
  { path: 'nuevo', loadChildren: () => import('./nuevo/nuevo.module').then(m => m.NuevoModule)},
  { path: 'editar', loadChildren: () => import('./editar/editar.module').then(m => m.EditarModule)},
  
  {path: '**', redirectTo: 'dasboard', pathMatch: 'full'}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
