import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ListCategoryModule } from './list-category/list-category.module';
import { NewCategoryModule } from './new-category/new-category.module';



@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    ListCategoryModule,
    NewCategoryModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule
  ]
})
export class CategoriasModule { }
