import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ListCategoryModule } from './list-category/list-category.module';



@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    ListCategoryModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule
  ]
})
export class CategoriasModule { }
