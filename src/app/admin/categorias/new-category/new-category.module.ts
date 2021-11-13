import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCategoryRoutingModule } from './new-category-routing.module';
import { NewCategoryComponent } from './new-category.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewCategoryComponent],
  imports: [
    CommonModule,
    NewCategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewCategoryModule { }
