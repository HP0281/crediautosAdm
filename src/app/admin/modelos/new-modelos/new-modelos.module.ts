import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModelosRoutingModule } from './new-modelos-routing.module';
import { NewModelosComponent } from './new-modelos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewModelosComponent],
  imports: [
    CommonModule,
    NewModelosRoutingModule,
    ReactiveFormsModule
  ],
  exports:[NewModelosComponent]
})
export class NewModelosModule { }
