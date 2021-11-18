import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { state } from '@angular/animations';



@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {


  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  filterProducto = '';
  vehicles: Vehicle[];
  administrador = false;
  empresaIs = false;
  loader = false;
  loaderEstado=false;

  navigationExtras : NavigationExtras = {
    state:{
      value:null
    }
  };
  constructor(
    private router: Router,
    private vehicleService: VehiclesService,
    private serviceModal: NgbModal) { }

  ngOnInit() {
    this.cargarProductos();

  }
  ActivarProducto(producto) {
    if (confirm("esta seguro de Activar?")) {
      producto.estadoProducto = "Activo";

    }

  }
  promocion(event, cambiandoModal) {
    console.log(event);
    event.promocion = !event.promocion;
    this.vehicleService.onSaveVehicle(event, event.id);
    this.serviceModal.open(cambiandoModal);
    this.loaderEstado = true;
    
  }
  status(vehicle, modal){
    vehicle.status = !vehicle.status;
    this.vehicleService.onSaveVehicle(vehicle, vehicle.id);
    this.serviceModal.open(modal);
    this.loaderEstado = true;
  }
  inactivarProducto(producto) {
    if (confirm("esta seguro de inactivar?")) {
      producto.estadoProducto = "Inactivo";

    }

  }
  cargarProductos() {
    this.loader = true;
    console.log("metodo de listar productos oinit");
    this.vehicleService.vehicles.subscribe(data => {
      this.vehicles = data;
      this.loader = false;
      console.log("data", data);
    })

  }
  cargarImagenes() {

  }

  modificarProducto(vehicle) {
    //localStorage.setItem("idVehicle", vehicle.id + "");
    this.navigationExtras.state.value = vehicle;
    debugger
    this.router.navigate(["productos/editar-producto"], this.navigationExtras);
  }

  isAdmin() {

  }
  isEmpresa() {

  }
}
