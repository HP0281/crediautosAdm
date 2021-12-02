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
import { ListTipoCamionComponent } from './list-tipo-camion.component';
import { ListTipoCamionRoutingModule } from './list-tipo-camion-routing.module';

@NgModule({
  declarations: [ListTipoCamionComponent],
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
    ListTipoCamionRoutingModule
  ], exports: [ListTipoCamionComponent]
})
export class ListTipoCamionModule { }
