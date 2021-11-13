import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoryRoutingModule } from './list-category-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListCategoryComponent } from './list-category.component';

@NgModule({
  declarations: [ListCategoryComponent],
  imports: [
    CommonModule,
    ListCategoryRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ListCategoryComponent
  ]
})
export class ListCategoryModule { }
