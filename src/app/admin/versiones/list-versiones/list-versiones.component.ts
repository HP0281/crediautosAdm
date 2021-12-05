import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ModelosService } from 'src/app/services/modelos.service';
import { VersionesService } from 'src/app/services/versiones.service';

@Component({
  selector: 'app-list-versiones',
  templateUrl: './list-versiones.component.html',
  styleUrls: ['./list-versiones.component.css']
})
export class ListVersionesComponent implements OnInit {
  marcas: any[];
  modelos: any[];
  categories: any[];
  pageActual: number = 1; 
  displayedColumns: string[] = ['category','marca', 'modelo','version', 'actions'];
  dataSource: any;
  idactual:string;
  versionForm: FormGroup;
  filterVersiones: string ='';

  constructor(private versionService: VersionesService,
    private fb: FormBuilder, private dialog: NgbModal,
    private marcasSv: MarcasService,
    private categoriaSv: CategoriasService,
    private modelosSv: ModelosService) {
    this.versionService.versiones.subscribe(resp=> {
      this.dataSource = resp;
    })
    this.marcasSv.marcas.subscribe(resp=> {
      this.marcas = resp;
    })
    this.categoriaSv.categories.subscribe(resp=> {
      this.categories = resp;
    })
    this.modelosSv.modelos.subscribe(resp=> {
      this.modelos = resp;
    })
   }

  ngOnInit(): void {
    this.initForm();
  }
  openEditModal(id:string, modal, marca:string, modelo:string, version:string, categoria:string){
    this.idactual = id;
    marca != null ? this.versionForm.get('marca').setValue(marca): "";
    modelo!= null ? this.versionForm.get('modelo').setValue(modelo): "";
    version!= null ? this.versionForm.get('name').setValue(version): "";
    categoria != null ? this.versionForm.get('category').setValue(categoria): "";
    this.dialog.open(modal);

  }
  openDeleteModal(id:string, modal){
    this.idactual = id;
    this.dialog.open(modal);
  }

  initForm(){
    this.versionForm = this.fb.group({
      category: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }

  onGuardar(){
    if (this.versionForm.valid) {
      this.versionService.onSaveVersion(this.versionForm.value, this.idactual);
    }
  }
  onEliminar(){
    this.versionService.onDeleteVersion(this.idactual);
  }
}
