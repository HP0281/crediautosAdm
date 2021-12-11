import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ModelosService } from 'src/app/services/modelos.service';
import { VersionesService } from 'src/app/services/versiones.service';

@Component({
  selector: 'app-new-versiones',
  templateUrl: './new-versiones.component.html',
  styleUrls: ['./new-versiones.component.css']
})
export class NewVersionesComponent implements OnInit {
  
  categories: any[];
  marcas: any[];
  modelos: any[];

  versionForm: FormGroup;

  constructor(private fb: FormBuilder, private marcaService: MarcasService,
    private modeloService: ModelosService, private versionService: VersionesService,
    private categoriService: CategoriasService) { 
      this.categoriService.categories.subscribe((resp:any)=>{
        this.categories = resp;
      });
      this.initForm();
    }

  ngOnInit(): void {
  }
  
  initForm(){
    this.versionForm = this.fb.group({
      category: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      modelo: new FormControl('',[Validators.required])
    })
  }
  filtroMarca(){
    let categoria = this.versionForm.get('category').value;
    this.marcaService.getMarcaByCategoria(categoria).subscribe((resp:any)=>{
      this.marcas = resp;
      console.log(resp)
    })
  }
  filtroModelo(){
    let categoria = this.versionForm.get('category').value;
    let marca = this.versionForm.get('marca').value;
    this.modeloService.getModelosforMarca(marca,categoria).subscribe((resp:any)=>{
      this.modelos = resp;
      console.log(resp)
    })
  }
  onGuardar(){
    if (this.versionForm.valid) {
      this.versionService.onSaveVersion(this.versionForm.value, null);
    }
  }
}
