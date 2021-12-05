import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMarcasRoutingModule } from './list-marcas-routing.module';
import { ListMarcasComponent } from './list-marcas.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ListMarcasComponent],
  imports: [
    CommonModule,
    ListMarcasRoutingModule,
    NgxPaginationModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    PipesModule,
    FormsModule
  ],
  exports: [ListMarcasComponent]
})
export class ListMarcasModule { }
