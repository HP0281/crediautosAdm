import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  isShow="dropdown mr-auto d-flex d-sm-none";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  Listar(){
    console.log("ingreso a rutar listar")
    this.router.navigate(["clientes/listar"]);
  }
  Nuevo(){
    this.router.navigate(["clientes/nuevo"]);
  }
  show(){
    console.log("ingreso de show")
    if(this.isShow=="dropdown mr-auto d-flex d-sm-none show"){
      this.isShow="dropdown mr-auto d-flex d-sm-none";
    }else
    this.isShow="dropdown mr-auto d-flex d-sm-none show";
  }
}