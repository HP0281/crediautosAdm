import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { merge, Observable, of as observableOf } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from 'src/app/admin/modals/user/user.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  displayedColumns: string[] = ['user', 'email', 'phone', 'rol', 'actions'];
  data: any[] = [];
  loader= false;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userSv: UserServiceService,
     public dialog: MatDialog) {}

  ngAfterViewInit() {
  
  }
  ngOnInit(){
    this.loader = true;
    this.userSv.userAdmin.subscribe(resp=> {
      this.data = resp;
      this.loader = false;
      this.isLoadingResults = false;
    });
  }
  onVer(element:any): void{
    console.log('elemento'+JSON.stringify(element))
    const dialogRef = this.dialog.open(UserComponent, {
      data: {  
        user: {
          name: element.nombre,
        lastname: element.apname,
        phone: element.phone,
        email: element.email,
        rol: element.rol,
        psw: element.clave
        },
        editable: false
      },
    });
    dialogRef.afterClosed().subscribe(result =>{

    })
  }
  onEditar(element:any){

  }
  onDelete(id:any){

  }
}
