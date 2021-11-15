import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { GaleriaProductosComponent } from './galeria-productos.component';
import { GaleriaProductosRoutingModule } from './galeria-productos-routing.module';
import {FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GaleriaProductosComponent],
  imports: [
    CommonModule,
    TranslateModule,
    GaleriaProductosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GaleriaProductosModule { }
