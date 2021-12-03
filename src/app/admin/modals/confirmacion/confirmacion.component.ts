import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
  message:string;
  cancel: string;
  acept: string;
  noresp = false;
  constructor(public dialogref: MatDialogRef<ConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any) { }

  ngOnInit(): void {
    if (this.data?.message) {
      this.message = this.data.message;
    }else{
      this.message = "Esta seguro de continuar?"
    }
    if (this.data?.cancel) {
      this.cancel = this.data.cancel;
    }else{
      this.cancel = "Cancelar"
    }
    if (this.data?.acept) {
      this.acept = this.data.acept;
    }else{
      this.acept = "Continuar"
    }
    if (this.data?.noresp) {
      console.log(this.noresp+'noresp')
      this.noresp = this.data.noresp;
    }
  }
  
  noClick(): void {
    this.dialogref.close();
  }
  onContinue(){
    this.dialogref.close(true);
  }
}
