import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  isShow="dropdown mr-auto d-flex d-sm-none";
  constructor(private router:Router) { }

  ngOnInit() {
    this.Listar();
  }
  Listar(){
    console.log("ingreso a rutar listar")
    this.router.navigate(["usuario/listar"]);
  }
  Nuevo(){
    this.router.navigate(["usuario/nuevo"]);
  }
  show(){
    console.log("ingreso de show")
    if(this.isShow=="dropdown mr-auto d-flex d-sm-none show"){
      this.isShow="dropdown mr-auto d-flex d-sm-none";
    }else
    this.isShow="dropdown mr-auto d-flex d-sm-none show";
  }
}
