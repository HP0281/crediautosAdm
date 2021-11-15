import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVersionesRoutingModule } from './list-versiones-routing.module';
import { ListVersionesComponent } from './list-versiones.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListVersionesComponent],
  imports: [
    CommonModule,
    ListVersionesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule, 
    ReactiveFormsModule
  ],
  exports: [ListVersionesComponent]
})
export class ListVersionesModule { }
