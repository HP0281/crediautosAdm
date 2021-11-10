import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  idRolUsuario: number;
  idUsuario: number;
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';
  verSeleccion: string = '';
  opcionSeleccionado: string = '0';
  info: any = {};
  loader:boolean = true;
  empresa=false;

  empresaSeleccionada:String='0';
  password='';
  passwordNueva='';
  confirmacionPassword='';
  isDomiciliario: boolean = false;
    isRecepcionista:boolean=false;
    isAdministrador:boolean=false;
    isUsuarioFinal:boolean=false;
    isEmpresa:boolean=false;




  constructor() { }
  valueDefecto: string;
 
  ngOnInit() {
    this.editar();
  //  this.cargarRoles();
    this.cargarEmpresas();
    this.asignarPermisos();
    // alert("id de rol del usuario es:"+this.idRolUsuario);
  }
  cargarEmpresas() {
    
  }
  consignar(modal) {
   // this.usuario = usuario;
   
  }
  editar() {
    let id = localStorage.getItem("id_usuario");
    
    // console.log("el usuario es"+usu)
  }

  cargarRoles(): void {
    
    //console.log(this.tipoProductos);
  }
  validadorNombre(event: any){
    const pattern = /^[a-zA-Z ]*$/;   
  //let inputChar = String.fromCharCode(event.charCode)
  if (!pattern.test(event.target.value)) {
    event.target.value = event.target.value.replace(/[^a-zA-Z ]/g, "");
    this.failActualizado = true;
    this.msjErr ="solo se permiten letras en el nombre";
    // invalid character, prevent input
  }else{
    this.failActualizado = false;
  }


  }
  actualizarUsuario(usuario) {
    
  }
  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
    if (this.opcionSeleccionado == "EMPRESA") {
      this.empresa = true;
      
    
    } else this.empresa = false;
  }
  capturarEmpresa() {
   
   
  }
  volver() {
    window.history.back();
  }
  getEmpresa(){
    
   }
  getIdRol(){
    
  }
  confirmarPassw(){
    
  }

  asignarPermisos() {
    
}
  
}
