import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaProductosComponent } from './galeria-productos.component';

const routes: Routes = [
  {path: '',component:GaleriaProductosComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaProductosRoutingModule { }
