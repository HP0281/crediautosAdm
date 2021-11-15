import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos.component';

const routes: Routes = [
  {path: '',component:ListarProductosComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarProductoRoutingModule { }
