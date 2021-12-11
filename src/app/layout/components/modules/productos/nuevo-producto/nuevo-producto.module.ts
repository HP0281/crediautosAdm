import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NuevoProductoComponent}from './nuevo-producto.component';
import{NuevoProductoRoutingModule}from './nuevo-producto-routing.module';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { MyfilterpipePipe } from './myfilterpipe.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [NuevoProductoComponent, MyfilterpipePipe],
  imports: [
    CommonModule,
    TranslateModule,
    NuevoProductoRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    PipesModule
  ]
})
export class NuevoProductoModule { }
