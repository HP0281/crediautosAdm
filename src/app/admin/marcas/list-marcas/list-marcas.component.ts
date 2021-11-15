import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-list-marcas',
  templateUrl: './list-marcas.component.html',
  styleUrls: ['./list-marcas.component.css']
})
export class ListMarcasComponent implements OnInit {
  marcas: any[];
  marcaForm: FormGroup;
  deletemarca: string;
  marcaDeleteid: string;
  marcaeditid: string;
  isloading=false;
  icon=false;

  constructor(private marcaService: MarcasService, private dialog: NgbModal,
    private fb: FormBuilder) { 
    this.marcaService.marcas.subscribe(resp => {
      this.marcas = resp;
    })
  }

  ngOnInit(): void {
  }
  
  onEditar(id:string, editmodal, categoria:string){
    this.marcaeditid = id;
    this.initForm();
    this.marcaForm.get('name').setValue(categoria);
    this.dialog.open(editmodal)
    
  }

  openDeleteModal(deleteModal, marcaId:string, marca:string){
    this.deletemarca = marca;
    this.marcaDeleteid = marcaId;
    this.dialog.open(deleteModal);
  }

  initForm(){
    this.marcaForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }
  
  onGuardar(marcaId:string, modal){
    this.dialog.open(modal);
    this.marcaService.onSaveMarca(this.marcaForm.value, marcaId);
  }
  
  onEliminar(id:string){
    this.isloading= true;
    this.icon = false;
    this.marcaService.onDeleteMarca(id).then(
      resp => {
        this.isloading = false;
        this.icon = true;
      }
      );
    }
    


}
