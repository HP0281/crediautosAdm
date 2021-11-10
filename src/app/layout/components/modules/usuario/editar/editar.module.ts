import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {EditarComponent}from './editar.component';
import{EditarRoutingModule}from './editar-routing.module';
import {FormsModule}from '@angular/forms';



@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    EditarRoutingModule,
    FormsModule
  ]
})
export class EditarModule { }
