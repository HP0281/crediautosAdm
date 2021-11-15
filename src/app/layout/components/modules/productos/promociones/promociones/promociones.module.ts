import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionesComponent } from './promociones.component';
import { TranslateModule } from '@ngx-translate/core';
import { NuevoProductoRoutingModule } from '../../nuevo-producto/nuevo-producto-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PromocionesRoutingModule } from './promociones-routing.module';

@NgModule({
  declarations: [PromocionesComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PromocionesRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PromocionesModule { }
