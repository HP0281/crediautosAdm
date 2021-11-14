import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoryRoutingModule } from './list-category-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
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
    ReactiveFormsModule
  ],
  exports: [
    ListCategoryComponent
  ]
})
export class ListCategoryModule { }
