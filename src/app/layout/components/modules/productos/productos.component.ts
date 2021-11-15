import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  isDomiciliario: boolean = false;
  isRecepcionista:boolean=false;
  isAdministrador:boolean=false;
  isUsuarioFinal:boolean=false;
  isEmpresa:boolean=false;
  isShow="dropdown mr-auto d-flex d-sm-none";
  constructor(private router:Router) { }

  ngOnInit() {
    this.asignarPermisos();
  }


  nuevoProducto(){
    this.router.navigate(["productos/nuevo-producto"]);
  }
  nuevaCategoria(){
    this.router.navigate(["productos/categoria-producto"]);
  }
  listar(){
    this.router.navigate(["productos/listar-productos"]);
  }
  galeriaImagenes(){
    this.router.navigate(["productos/galeria-productos"]);
  }
  promociones(){
    this.router.navigate(["productos/promociones"]);
  }
  
  asignarPermisos() {
    
}
show(){
  console.log("ingreso de show")
  if(this.isShow=="dropdown mr-auto d-flex d-sm-none show"){
    this.isShow="dropdown mr-auto d-flex d-sm-none";
  }else
  this.isShow="dropdown mr-auto d-flex d-sm-none show";
}
}
