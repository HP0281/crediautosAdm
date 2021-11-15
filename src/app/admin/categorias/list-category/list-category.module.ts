import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoryRoutingModule } from './list-category-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { ListCategoryComponent } from './list-category.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListCategoryComponent],
  imports: [
    CommonModule,
    ListCategoryRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports: [
    ListCategoryComponent
  ]
})
export class ListCategoryModule { }
