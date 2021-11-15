import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMarcasRoutingModule } from './new-marcas-routing.module';
import { NewMarcasComponent } from './new-marcas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewMarcasComponent],
  imports: [
    CommonModule,
    NewMarcasRoutingModule,
    ReactiveFormsModule
  ],
  exports: [NewMarcasComponent]
})
export class NewMarcasModule { }
