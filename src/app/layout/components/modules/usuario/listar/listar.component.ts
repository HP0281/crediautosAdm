import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  eliminado = false;
  failEliminado = false;
  msjErr = '';
  msjOK = '';
  actualizado = false;
  failActualizado = false;
  msjErrAC = '';
  msjOKAC = '';
  pageActual: number =1;
  filterUsuario='';
  disponile="Disponible";
  noDisponile="No disponible";
  domiciliario="DOMICILIARIO";

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  loader:boolean = true;
  
  constructor(private router:Router,
    private serviceModal: NgbModal,
    private userService:UserServiceService) { }

  ngOnInit() {
    this.userService.user.subscribe((resp:any)=>{
      //this.categories = resp;
      console.log("resp",resp)
    })
  }
  editarUsuario(usuario){
    
    localStorage.setItem("id_usuario",usuario.id+"");
    this.router.navigate(["usuario/editar"]);
    
  }

  borrarUsuario(usuario){
    if (confirm('¿Estás seguro?')) {
     
    }
  }
  inactivarUsuario(usuario){
    //usuario.rol.id = this.getIdRol();
   
  }
  activarUsuario(usuario){
    
  }
  cambiarEstadoDomiciliarioDisp(usuario,modal){
    this.serviceModal.open(modal);
   
  }
  cambiarEstadoDomiciliarioNoDisp(usuario,modal){
    this.serviceModal.open(modal);
    usuario.estadoDomiciliario="No disponible";
    
    
  }
  
}
