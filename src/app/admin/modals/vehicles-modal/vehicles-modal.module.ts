import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesModalRoutingModule } from './vehicles-modal-routing.module';
import { VehiclesModalComponent } from './vehicles-modal.component';
import { MaterialModule } from 'src/app/shared/material/material/material.module';


@NgModule({
  declarations: [VehiclesModalComponent],
  imports: [
    CommonModule,
    VehiclesModalRoutingModule,
    MaterialModule
  ],
  exports: [VehiclesModalComponent]
})
export class VehiclesModalModule { }
