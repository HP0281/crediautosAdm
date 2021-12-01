import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import{ListarRoutingModule}from './listar-routing.module';
import {ListarComponent}from './listar.component';

import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinner, MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ListarRoutingModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})

export class ListarModule { }
