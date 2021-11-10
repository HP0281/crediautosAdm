import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule}from '@ngx-translate/core';
import{UsuarioRoutingModule}from './usuario-routing.module';
import {UsuarioComponent} from './usuario.component';



@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    TranslateModule,
    UsuarioRoutingModule,

  ]
})
export class UsuarioModule { }
