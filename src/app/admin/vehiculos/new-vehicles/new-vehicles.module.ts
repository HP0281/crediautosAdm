import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewVehiclesRoutingModule } from './new-vehicles-routing.module';
import { NewVehiclesComponent } from '../new-vehicles/new-vehicles.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [NewVehiclesComponent],
  imports: [
    CommonModule,
    NewVehiclesRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  exports: [NewVehiclesComponent]
})
export class NewVehiclesModule { }
