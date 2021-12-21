import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditarPromocionComponent } from './editar-promocion.component';



const routes: Routes = [
  {path: '',component:EditarPromocionComponent,
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

export class EditarPromocionRoutingModule { }
