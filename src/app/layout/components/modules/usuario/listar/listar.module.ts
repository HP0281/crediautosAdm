import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import{ListarRoutingModule}from './listar-routing.module';
import {ListarComponent}from './listar.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ListarRoutingModule,
    FormsModule
  ]
})

export class ListarModule { }
