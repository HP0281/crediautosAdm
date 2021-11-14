import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private categoryService: CategoriasService, private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.initForm();
   }

  ngOnInit(): void {
  }
  
  onGuardar(){
    if (this.categoryForm.valid) {
      this.categoryService.onSaveCategory(this.categoryForm.value, null);
    }
  }

  initForm(){
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }

}
