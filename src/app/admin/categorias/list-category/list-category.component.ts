import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: any[];
  constructor(private categoryService: CategoriasService, private dialog: MatDialog) { 
    this.categoryService.categories.subscribe(resp => {
      this.categories = resp;
    })
  }

  ngOnInit(): void {
  }
  
  onEditar(id:string){
    this.dialog.open(NewCategoryComponent, {
      data: {
        categoryId: id
      }
    })
  }

  onELiminar(){

  }
}
