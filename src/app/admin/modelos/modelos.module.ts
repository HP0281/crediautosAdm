import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelosRoutingModule } from './modelos-routing.module';
import { ModelosComponent } from './modelos.component';
import { NewModelosComponent } from './new-modelos/new-modelos.component';
import { ListModelosComponent } from './list-modelos/list-modelos.component';


@NgModule({
  declarations: [ModelosComponent, NewModelosComponent, ListModelosComponent],
  imports: [
    CommonModule,
    ModelosRoutingModule
  ]
})
export class ModelosModule { }
