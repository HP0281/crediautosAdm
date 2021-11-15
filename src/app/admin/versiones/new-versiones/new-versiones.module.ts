import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewVersionesRoutingModule } from './new-versiones-routing.module';
import { NewVersionesComponent } from './new-versiones.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewVersionesComponent],
  imports: [
    CommonModule,
    NewVersionesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [NewVersionesComponent]
})
export class NewVersionesModule { }
