import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Category } from 'src/app/models/category.interface';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: any[];
  categoryForm: FormGroup;
  deleteCategory: string;
  categoryDeleteid: string;
  categoryeditid: string;
  isloading=false;
  icon=false;

  constructor(private categoryService: CategoriasService, private dialog: NgbModal,
    private fb: FormBuilder) { 
    this.categoryService.categories.subscribe(resp => {
      this.categories = resp;
    })
  }

  ngOnInit(): void {
  }
  
  onEditar(id:string, editmodal, categoria:string){
    this.categoryeditid = id;
    this.initForm();
    this.categoryForm.get('name').setValue(categoria);
    this.dialog.open(editmodal)
    
  }

  openDeleteModal(deleteModal, categoryId:string, category:string){
    this.deleteCategory = category;
    this.categoryDeleteid = categoryId;
    this.dialog.open(deleteModal);
  }

  initForm(){
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }
  
  onGuardar(categoryId:string, modal){
    this.dialog.open(modal);
    this.categoryService.onSaveCategory(this.categoryForm.value, categoryId);
  }
  
  onEliminar(id:string){
    this.isloading= true;
    this.icon = false;
    this.categoryService.onDeleteCategory(id).then(
      resp => {
        this.isloading = false;
        this.icon = true;
      }
      );
    }
    
}
