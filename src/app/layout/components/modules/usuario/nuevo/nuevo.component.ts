import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  opcionSeleccionado: string = '0';
  empresaSeleccionada:String='0';
  verSeleccion: string = '';

  empresa = false;
  loader = true;

  msjErr = '';
  msjOK = '';
  creado = false;
  failCreado = false;



  constructor(private router: Router) { }

  ngOnInit() {
    this.cargarRoles();
    this.cargarEmpresas();
  }

  cargarEmpresas() {
   
  }
  cargarRoles(): void {
    
  }
  esEmailValido(email: string):boolean {
    let mailValido = false;
      'use strict';

      var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }
  
  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
    if (this.opcionSeleccionado == "EMPRESA") {
      this.empresa = true;
      
    
    } else this.empresa = false;
  }
  capturarEmpresa() {
   
  
  }
  guardarUsuario() {
    
  }

  validadorNombre(event: any){
    const pattern = /^[a-zA-Z ]*$/;   
  //let inputChar = String.fromCharCode(event.charCode)
  if (!pattern.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, "");
    this.failCreado = true;
    this.msjErr ="solo se permiten letras en el nombre";
    // invalid character, prevent input
  }else{
    this.failCreado = false;
  }


  }

  getEmpresa(){
  
  }
  guardarCaja() {
    

  }
  getidSesion() {
   

  }

  getIdRol() {
 
    
  }
}
