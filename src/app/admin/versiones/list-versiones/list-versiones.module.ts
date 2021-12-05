import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVersionesRoutingModule } from './list-versiones-routing.module';
import { ListVersionesComponent } from './list-versiones.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [ListVersionesComponent],
  imports: [
    CommonModule,
    ListVersionesRoutingModule,
    NgxPaginationModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule, 
    ReactiveFormsModule,
    PipesModule,
    FormsModule
  ],
  exports: [ListVersionesComponent]
})
export class ListVersionesModule { }
