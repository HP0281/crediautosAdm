import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailVehiclesRoutingModule } from './detail-vehicles-routing.module';
import { DetailVehiclesComponent } from '../detail-vehicles/detail-vehicles.component';


@NgModule({
  declarations: [DetailVehiclesComponent],
  imports: [
    CommonModule,
    DetailVehiclesRoutingModule
  ]
})
export class DetailVehiclesModule { }
