import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-new-modelos',
  templateUrl: './new-modelos.component.html',
  styleUrls: ['./new-modelos.component.css']
})
export class NewModelosComponent implements OnInit {

  marcas: any[];
  modeloForm: FormGroup;
  categories: any[];

  constructor(private fb: FormBuilder, private marcaService: MarcasService,
    private modelosService: ModelosService,
    private categoriaService : CategoriasService) { 
      this.categoriaService.categories.subscribe(resp=>{
        this.categories = resp;
      })
    
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.modeloForm = this.fb.group({
      category: new FormControl('', Validators.required),
      marca: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }
  filtroMarca(){
    let categoria = this.modeloForm.get('category').value;
    this.marcaService.getMarcaByCategoria(categoria).subscribe((resp:any)=>{
      this.marcas = resp;
      console.log(resp)
    })
  }
  onGuardar(){
    if (this.modeloForm.valid) {
      this.modelosService.onSaveModelo(this.modeloForm.value, null);
    }
  }
}
