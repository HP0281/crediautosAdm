import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modelo } from 'src/app/models/modelo.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-list-modelos',
  templateUrl: './list-modelos.component.html',
  styleUrls: ['./list-modelos.component.css']
})
export class ListModelosComponent implements OnInit {
  displayedColumns: string[] = ['category','marca', 'modelo', 'actions'];
  dataSource: Modelo[]=[];
  modeloform: FormGroup;
  idactual:string;
  pageActual: number = 1; 
  marcas:any[];
  categories: any[];
  filterModelos='';

  constructor(private modelosService: ModelosService,
    private dialog: NgbModal, private fb: FormBuilder,
    private marcaService: MarcasService,
    private categoriaService: CategoriasService) {
    this.modelosService.modelos.subscribe(resp=>{
      this.dataSource = resp;
    })
    this.marcaService.marcas.subscribe(resp=>{
      this.marcas = resp;
    })
    this.categoriaService.categories.subscribe(resp=>{
      this.categories = resp;
    })
   }

  ngOnInit(): void {
    this.initForm();
  }

  openEditModal(id:string, modal, marca: string, modelo: string, category:string){
    console.log("este id modelo",id)
    this.idactual = id;
    marca != null ? this.modeloform.get('marca').setValue(marca): "";
    modelo != null ? this.modeloform.get('name').setValue(modelo): "";
    category != null ? this.modeloform.get('category').setValue(category): "";
    this.dialog.open(modal);
  }

  openDeleteModal(id:string, modal){
    this.idactual = id;
    this.dialog.open(modal);
  }
  onGuardar(){
    if(this.modeloform.valid){
      this.modelosService.onSaveModelo(this.modeloform.value, this.idactual);
    }
  }
  onEliminar(){
    this.modelosService.onDeleteModelo(this.idactual);
  }
  initForm(){
    this.modeloform = this.fb.group({
      category: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      name: new FormControl('',[Validators.required])
    })
  }
}
