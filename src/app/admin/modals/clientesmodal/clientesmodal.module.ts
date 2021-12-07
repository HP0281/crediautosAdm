import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesmodalRoutingModule } from './clientesmodal-routing.module';
import { ClientesmodalComponent } from './clientesmodal.component';
import { MaterialModule } from 'src/app/shared/material/material/material.module';


@NgModule({
  declarations: [ClientesmodalComponent],
  imports: [
    CommonModule,
    ClientesmodalRoutingModule,
    MaterialModule
  ],
  exports:[ClientesmodalComponent]
})
export class ClientesmodalModule { }
