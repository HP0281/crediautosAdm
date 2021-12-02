import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  direccionForm: FormGroup;
  isEditable=true;
  userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder) {
      console.log('entro dialog')

     }

  ngOnInit(): void {
    this.initForm();
    console.log(JSON.stringify(this.data)+"datadialog")
    if (this.data?.user) {
      this.userForm.get('name').setValue(this.data?.user?.name != null ? this.data.user.name: "");
      this.userForm.get('lastname').setValue(this.data?.user?.lastname != null ? this.data.user.lastname: "");
      this.userForm.get('phone').setValue(this.data?.user?.phone != null ? this.data.user.phone: "");
      this.userForm.get('email').setValue(this.data?.user?.email != null ? this.data.user.email: "");
      this.userForm.get('psw').setValue(this.data?.user?.psw != null ? this.data.user.psw: "");
      this.userForm.get('rol').setValue(this.data?.user?.rol != null ? this.data.user.rol: "");
      console.log('disable'+this.data.editable)
      if (this.data?.editable === false) {
        this.userForm.get('name').disable();
        this.userForm.get('lastname').disable();
        this.userForm.get('phone').disable();
        this.userForm.get('email').disable();
        this.userForm.get('psw').disable();
        this.userForm.get('rol').disable();
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onGuardar(){
    this.dialogRef.close({
      name: this.direccionForm.get('name').value,
      lastname: this.direccionForm.get('descripcion').value,
      phone: this.direccionForm.get('phone').value,
      email: this.direccionForm.get('email').value,
      psw: this.direccionForm.get('psw').value,
      rol: this.direccionForm.get('rol').value
    });
  }
  initForm(){
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      psw: new FormControl('', [Validators.required]),
      rol: new FormControl('',[Validators.required])
    })
  }
}
