import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModelosRoutingModule } from './new-modelos-routing.module';
import { NewModelosComponent } from './new-modelos.component';


@NgModule({
  declarations: [NewModelosComponent],
  imports: [
    CommonModule,
    NewModelosRoutingModule
  ],
  exports:[NewModelosComponent]
})
export class NewModelosModule { }
