import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NuevoProductoComponent}from './nuevo-producto.component';
import{NuevoProductoRoutingModule}from './nuevo-producto-routing.module';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NuevoProductoComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NuevoProductoRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class NuevoProductoModule { }
