import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { VehiclesInfoBasicService } from 'src/app/services/vehicles-info-basic.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {
  displayedColumns: string[] = ['marca', 'modelo', 'version', 'year', 'actions'];
  data: any;

   navigationExtras: NavigationExtras = {
     state:{
       value: null
     }
   };

  constructor(private vehiclesService: VehiclesInfoBasicService, private router: Router) {
    this.vehiclesService.vehicles.subscribe(resp=>{
      this.data = resp;
    })
   }

  ngOnInit(): void {
  }
  onEditar(item:any): void{
     this.navigationExtras.state.value = item;
     this.router.navigate(['editar/vehicle'], this.navigationExtras);

  }
  onVer(item:any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['ver/vehicle'], this.navigationExtras);
  }
  onEliminar(){

  }
}
