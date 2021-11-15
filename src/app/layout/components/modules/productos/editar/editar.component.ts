import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  loader=false;

  idProducto:number;
  administrador = false;
 

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  idImagen:number=1;
  imagenes:any[];

  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  categoriaSeleccionada="";
  constructor(private serviceModal:NgbModal,) { }

  ngOnInit() {
    this.editar();
  }
  editar() {
    this.loader=true;
    let id = localStorage.getItem("idProducto");
   
    // console.log("el usuario es"+usu)
  }
  isAdmin() {
    
  }
  selecionImagen(imagen){

    console.log("imagen seleccionada");
    console.log(imagen);
    
    this.serviceModal.dismissAll();
   }

   seleccionarImagen(modal) {
    if(this.imagenes!=null){

    }else
    this.cargarImagenes();
    this.serviceModal.open(modal);
  }
  cargarImagenes(){
   
  }
  actualizarProducto() {

  //  this.usuario.rol.id = this.getIdRol();
    console.log("datos de producto");

  }
}
