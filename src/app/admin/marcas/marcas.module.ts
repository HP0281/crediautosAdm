import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ListMarcasComponent } from './list-marcas/list-marcas.component';
import { NewMarcasComponent } from './new-marcas/new-marcas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ListMarcasModule } from './list-marcas/list-marcas.module';
import { NewMarcasModule } from './new-marcas/new-marcas.module';
import { ListlMarcasMotosModule } from './list-marcas-motos/listl-marcas-motos/listl-marcas-motos.module';
import { ListTipoCamionModule } from './list-tipo-camion/list-tipo-camion/list-tipo-camion.module';


@NgModule({
  declarations: [MarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    ListMarcasModule,
    NewMarcasModule,
    ListlMarcasMotosModule,
    ListTipoCamionModule
  ]
})
export class MarcasModule { }
