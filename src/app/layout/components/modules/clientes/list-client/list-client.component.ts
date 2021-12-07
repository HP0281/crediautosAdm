import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
}
