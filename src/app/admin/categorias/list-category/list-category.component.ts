import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: any[];
  categoryForm: FormGroup;

  constructor(private categoryService: CategoriasService, private dialog: NgbModal,
    private fb: FormBuilder) { 
    this.categoryService.categories.subscribe(resp => {
      this.categories = resp;
    })
    this.initForm();
  }

  ngOnInit(): void {
  }
  
  onEditar(id:string, editmodal){
    this.dialog.open(editmodal)
    
  }

  onELiminar(){

  }

  initForm(){
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }
}
