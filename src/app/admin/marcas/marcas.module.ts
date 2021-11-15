import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ListMarcasComponent } from './list-marcas/list-marcas.component';
import { NewMarcasComponent } from './new-marcas/new-marcas.component';


@NgModule({
  declarations: [MarcasComponent, ListMarcasComponent, NewMarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
