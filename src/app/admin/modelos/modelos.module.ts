import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelosRoutingModule } from './modelos-routing.module';
import { ModelosComponent } from './modelos.component';
import { NewModelosComponent } from './new-modelos/new-modelos.component';
import { ListModelosComponent } from './list-modelos/list-modelos.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ListModelosModule } from './list-modelos/list-modelos.module';
import { NewModelosModule } from './new-modelos/new-modelos.module';


@NgModule({
  declarations: [ModelosComponent],
  imports: [
    CommonModule,
    ModelosRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    ListModelosModule,
    NewModelosModule
  ]
})
export class ModelosModule { }
