import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-vehicles-modal',
  templateUrl: './vehicles-modal.component.html',
  styleUrls: ['./vehicles-modal.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VehiclesModalComponent implements OnInit {
  dataSource:Vehicle[];
  displayedColumns: string[]= ['vehicle', 'plate', 'state', 'tecno', 'soat']
  isEditable=true;
  vehicleForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<VehiclesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder) {

     }

  ngOnInit(): void {
    if (this.data?.vehicles) {
      this.dataSource = this.data.vehicles;
      console.log('llega'+JSON.stringify(this.dataSource));
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onGuardar(){
    this.dialogRef.close(true);
  }
  initForm(){
    
  }
}
