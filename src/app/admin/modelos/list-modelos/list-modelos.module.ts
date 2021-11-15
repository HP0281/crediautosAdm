import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModelosRoutingModule } from './list-modelos-routing.module';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModelosComponent } from './list-modelos.component';


@NgModule({
  declarations: [ListModelosComponent],
  imports: [
    CommonModule,
    ListModelosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule, 
    ReactiveFormsModule
  ],
  exports:[ListModelosComponent]
})
export class ListModelosModule { }
