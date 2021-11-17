import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiclesService } from 'src/app/services/vehicles.service';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  valor1=null;
  valor2=null;
  resultado=null;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;

  

  loader=false;

  idProducto:number;
  administrador = false;
 
  id;
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
  constructor(private serviceModal:NgbModal,private vehicleService:VehiclesService) { }

  ngOnInit() {
    this.editar();
    this.vehicleService.getVehiclesById(this.id).subscribe(data=>{
      console.log("vehicle:",data)
      this.loader=false;
    });
  }
  editar() {
    this.loader=true;
    this.id = localStorage.getItem("idVehicle");
    
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
