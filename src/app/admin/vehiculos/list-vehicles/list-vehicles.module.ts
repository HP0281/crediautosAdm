import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVehiclesRoutingModule } from './list-vehicles-routing.module';
import { ListVehiclesComponent } from '../list-vehicles/list-vehicles.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ListVehiclesComponent],
  imports: [
    CommonModule,
    ListVehiclesRoutingModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [ListVehiclesComponent]
})
export class ListVehiclesModule { }
