import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVehiclesRoutingModule } from './list-vehicles-routing.module';
import { ListVehiclesComponent } from '../list-vehicles/list-vehicles.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListVehiclesComponent],
  imports: [
    CommonModule,
    ListVehiclesRoutingModule,
    NgxPaginationModule,
    MatTableModule,
    MatButtonModule,
    PipesModule,
    FormsModule
  ],
  exports: [ListVehiclesComponent]
})
export class ListVehiclesModule { }
