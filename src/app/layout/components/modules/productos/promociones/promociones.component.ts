import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {


  productoSeleccionado:"";
  loader = true;

  imgDefecto=false;
  isButtonImage=true;

  imagenes:any[];
  message: string;
  retrievedImage: any;
  failCreado=false;
  creado=false;
  retrieveResonse: any;
  base64Data: any;

  msjErr="";
  msjOK="";
  idImagen:number=1;

  @ViewChild('ModalModificar', { static: false }) ModalModificar;
  constructor(private router:Router) { }

  ngOnInit() {
    
    
  }
  checkBoxDefecto(){
    //this.imgDefecto=!this.imgDefecto;
    console.log("cambio de checkbox");
    console.log(this.imgDefecto);
    this.isButtonImage=!this.isButtonImage;
   
  }
  listar(){
    this.router.navigate(["productos/promociones/listar-promocion"]);
  }
  capturarProducto() {
    
  }
  modificarPromocion(promocion,modal){
    
 
  }
  seleccionarImagen(modal) {
    
  }
  guardarPromocion(){
   
  }
  cargarImagenes(){
    
  }
  selecionImagen(imagen){
    
   }
}
