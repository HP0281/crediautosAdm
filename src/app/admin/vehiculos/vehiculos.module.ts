import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculosComponent } from './vehiculos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ListVehiclesModule } from './list-vehicles/list-vehicles.module';
import { NewVehiclesModule } from './new-vehicles/new-vehicles.module';


@NgModule({
  declarations: [VehiculosComponent],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    MatTabsModule,
    ListVehiclesModule,
    NewVehiclesModule
  ],
  exports:[VehiculosComponent]
})
export class VehiculosModule { }
