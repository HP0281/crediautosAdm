import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VersionesService } from 'src/app/services/versiones.service';

@Component({
  selector: 'app-list-versiones',
  templateUrl: './list-versiones.component.html',
  styleUrls: ['./list-versiones.component.css']
})
export class ListVersionesComponent implements OnInit {
  
  displayedColumns: string[] = ['marca', 'modelo','version', 'actions'];
  dataSource: any;
  idactual:string;
  versionForm: FormGroup;

  constructor(private versionService: VersionesService,
    private fb: FormBuilder, private dialog: NgbModal) {
    this.versionService.versiones.subscribe(resp=> {
      this.dataSource = resp;
    })
   }

  ngOnInit(): void {
    this.initForm();
  }
  openEditModal(id:string, modal, marca:string, modelo:string, version:string){
    this.idactual = id;
    this.versionForm.get('marca').setValue(marca);
    this.versionForm.get('modelo').setValue(modelo);
    this.versionForm.get('name').setValue(version);
    this.dialog.open(modal);

  }
  openDeleteModal(id:string, modal){
    this.idactual = id;
    this.dialog.open(modal);
  }

  initForm(){
    this.versionForm = this.fb.group({
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
