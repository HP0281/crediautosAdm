import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { User } from 'src/app/models/user.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  user : User;
  hide = false; 
  labelPosition: 'before' | 'after' = 'after';

  registroForm: FormGroup;
  constructor(private fb: FormBuilder, private userservice: UserServiceService,
    private authservice: AuthServiceService) {
    this.initform();
   }
  ngOnInit(): void {
  }
  
  initform(){
    this.registroForm = this.fb.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apname:  new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      clave: new FormControl('', [Validators.required])
    })
  }
  async onRegistrar(email: string, pass: string){
    try {
      await this.authservice.registrar(email, pass);
      this.onGuardar();
      this.registroForm.reset();
    } catch (error) {
      alert(error.message);
    }
    this.onGuardar();
  }
  onGuardar(){
    if (this.registroForm.valid) {
      const user = this.registroForm.value;
      console.log(user)
      const userid = null;
      this.userservice.onSaveUserAdmin(this.registroForm.value);
    }
  }
  getErrorMessage() {
    if (this.registroForm.get('nombre').hasError('required')) {
      return 'You must enter a value';
    }
 
    return this.registroForm.get('nombre').hasError('nombre') ? 'Not a valid nombre' : '';
  }
}
