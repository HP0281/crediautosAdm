import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-new-marcas',
  templateUrl: './new-marcas.component.html',
  styleUrls: ['./new-marcas.component.css']
})
export class NewMarcasComponent implements OnInit {
  marcaForm: FormGroup;

  constructor(private marcaService: MarcasService, private fb: FormBuilder,
    private dialog: NgbModal) {
    this.initForm();
   }

  ngOnInit(): void {
  }
  
  onGuardar(modal){
    if (this.marcaForm.valid) {
      this.marcaService.onSaveMarca(this.marcaForm.value, null);
      this.dialog.open(modal);
      this.marcaForm.reset();
    }
  }

  initForm(){
    this.marcaForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }
}