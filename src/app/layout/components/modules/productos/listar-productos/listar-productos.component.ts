import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {


  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  filterProducto='';
  
  administrador = false;
  empresaIs=false;

  constructor(
    private router:Router) { }
    loader=false;
  ngOnInit() {
    this.cargarProductos();
    this.isAdmin();
    this.isEmpresa();
  }
  ActivarProducto(producto){
    if(confirm("esta seguro de Activar?")){
      producto.estadoProducto="Activo";
    
    }
    
  }
  inactivarProducto(producto){
    if(confirm("esta seguro de inactivar?")){
      producto.estadoProducto="Inactivo";
      
    }
    
  }
  cargarProductos() {
    this.loader=true;
    console.log("metodo de listar productos oinit");
    
    
  }
  cargarImagenes(){
    
  }

  modificarProducto(producto){
    localStorage.setItem("idProducto",producto.idProducto+"");
    this.router.navigate(["productos/editar-producto"]);
  }
  
  isAdmin() {
   
  }
  isEmpresa() {
    
  }
}
