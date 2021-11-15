import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-list-modelos',
  templateUrl: './list-modelos.component.html',
  styleUrls: ['./list-modelos.component.css']
})
export class ListModelosComponent implements OnInit {
  displayedColumns: string[] = ['marca', 'modelo', 'actions'];
  dataSource: any;
  modeloform: FormGroup;
  idactual:string;

  constructor(private modelosService: ModelosService,
    private dialog: NgbModal, private fb: FormBuilder) {
    this.modelosService.modelos.subscribe(resp=>{
      this.dataSource = resp;
    })
   }

  ngOnInit(): void {
    this.initForm();
  }

  openModal(id:string, modal){
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
      marca: new FormControl('', [Validators.required]),
      name: new FormControl('',[Validators.required])
    })
  }
}
