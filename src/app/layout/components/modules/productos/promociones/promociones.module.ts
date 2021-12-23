import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionesComponent } from './promociones.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PromocionesRoutingModule } from './promociones-routing.module';
import { ConfirmacionModule } from 'src/app/admin/modals/confirmacion/confirmacion.module';

@NgModule({
  declarations: [PromocionesComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PromocionesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmacionModule
  ]
})
export class PromocionesModule { }
