import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModelosRoutingModule } from './list-modelos-routing.module';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListModelosComponent } from './list-modelos.component';

import {NgxPaginationModule} from 'ngx-pagination';
import {PipesModule} from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [ListModelosComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ListModelosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule, 
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ],
  exports:[ListModelosComponent]
})
export class ListModelosModule { }
