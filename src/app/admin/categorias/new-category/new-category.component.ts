import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private categoryService: CategoriasService, private fb: FormBuilder,
    private dialog: NgbModal) {
    this.initForm();
   }

  ngOnInit(): void {
  }
  
  onGuardar(modal){
    if (this.categoryForm.valid) {
      this.categoryService.onSaveCategory(this.categoryForm.value, null);
      this.dialog.open(modal);
      this.categoryForm.reset();
    }
  }

  initForm(){
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }

}
