import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import {NgxPaginationModule} from 'ngx-pagination';
import { ListlMarcasMotosRoutingModule } from './listl-marcas-motos-routing.module';
import { ListlMarcasMotosComponent } from './listl-marcas-motos.component';


@NgModule({
  declarations: [ListlMarcasMotosComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ListlMarcasMotosRoutingModule
  ], exports: [ListlMarcasMotosComponent]
})
export class ListlMarcasMotosModule { }
