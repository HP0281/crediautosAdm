import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientesmodalComponent } from 'src/app/admin/modals/clientesmodal/clientesmodal.component';
import { ConfirmacionComponent } from 'src/app/admin/modals/confirmacion/confirmacion.component';
import { User } from 'src/app/models/user.interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clientes:User[];

  constructor(private userSv: UserServiceService,
    public dialog: MatDialog) {
      this.userSv.user.subscribe(resp=>{
        this.clientes = resp;
      })
     }

  ngOnInit(): void {
  }
  vehicles(id:any){

  }
  onEdit(cliente:any){
    const dialogRef = this.dialog.open(ClientesmodalComponent, {
      width: '300px',
      data: {
        user: cliente
      }
    });
    dialogRef.afterClosed().subscribe(resp => {
      this.userSv.onSaveUser(resp.user, cliente.id);
    })
  }
  onVer(cliente:any){
    const dialogRef = this.dialog.open(ClientesmodalComponent, {
      width: '300px',
      data: {
        user: cliente,
        editable: false
      }
    })
  }
  onDelete(id:any){
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      width: '250px',
      data:{
        message: 'Confirmar eliminacion',
        acept:'Eliminar'
      }
    });
    dialogRef.afterClosed().subscribe(resp=>{
      if (resp) {
        this.userSv.onDeleteUser(id);
      }
    })
  }
}
