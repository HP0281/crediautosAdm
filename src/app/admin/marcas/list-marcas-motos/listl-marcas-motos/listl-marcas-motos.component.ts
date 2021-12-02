import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-listl-marcas-motos',
  templateUrl: './listl-marcas-motos.component.html',
  styleUrls: ['./listl-marcas-motos.component.css']
})
export class ListlMarcasMotosComponent implements OnInit {
  marcas: any[];
  categories:any[];
  marcaForm: FormGroup;
  deletemarca: string;
  marcaDeleteid: string;
  marcaeditid: string;
  isloading=false;
  icon=false;
  pageActual: number = 1;

  constructor(private marcaService: MarcasService, private dialog: NgbModal,
    private fb: FormBuilder,
    private categoriaService: CategoriasService) { 
    this.marcaService.marcas.subscribe(resp => {
      this.marcas = resp;
    })
    this.categoriaService.categories.subscribe(resp => {
      this.categories = resp;
    })
  }

  ngOnInit(): void {
  }
  
  onEditar(id:string, editmodal, marca:string, categoria:string){
    this.marcaeditid = id;
    this.initForm();
    marca != null ?this.marcaForm.get('name').setValue(marca): "";
    categoria != null ? this.marcaForm.get('category').setValue(categoria): "";
    
    this.dialog.open(editmodal)
    
  }

  openDeleteModal(deleteModal, marcaId:string, marca:string){
    this.deletemarca = marca;
    this.marcaDeleteid = marcaId;
    this.dialog.open(deleteModal);
  }

  initForm(){
    this.marcaForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      category : new FormControl('', [Validators.required])
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