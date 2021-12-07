import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clientesmodal',
  templateUrl: './clientesmodal.component.html',
  styleUrls: ['./clientesmodal.component.css']
})
export class ClientesmodalComponent implements OnInit {
  isEditable=true;
  userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ClientesmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder) {

     }

  ngOnInit(): void {
    this.initForm();
    console.log(JSON.stringify(this.data)+"datadialog")
    if (this.data?.user) {
      this.userForm.get('name').setValue(this.data?.user?.name != null ? this.data.user.name: "");
      this.userForm.get('lastname').setValue(this.data?.user?.lastname != null ? this.data.user.lastname: "");
      this.userForm.get('telefono').setValue(this.data?.user?.telefono != null ? this.data.user.telefono: "");
      this.userForm.get('email').setValue(this.data?.user?.email != null ? this.data.user.email: "");
      this.userForm.get('clave').setValue(this.data?.user?.clave != null ? this.data.user.clave: "");
      this.userForm.get('identificacion').setValue(this.data?.user?.identificacion != null ? this.data.user.identificacion: "");
      console.log('disable'+this.data.editable)
      if (this.data?.editable === false) {
        this.userForm.get('name').disable();
        this.userForm.get('lastname').disable();
        this.userForm.get('telefono').disable();
        this.userForm.get('email').disable();
        this.userForm.get('clave').disable();
        this.userForm.get('identificacion').disable();
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onGuardar(){
    const user = {
      name: this.userForm.get('name').value,
      lastname: this.userForm.get('lastname').value,
      telefono: this.userForm.get('telefono').value,
      email: this.userForm.get('email').value,
      clave: this.userForm.get('clave').value,
      identificacion: this.userForm.get('identificacion').value
    }
    this.dialogRef.close({
      user
    });
  }
  initForm(){
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      clave: new FormControl(''),
      identificacion: new FormControl('',[Validators.required])
    })
  }
}
