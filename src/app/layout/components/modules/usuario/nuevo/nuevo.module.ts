import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NuevoComponent}from './nuevo.component';
import{NuevoRoutingModule}from './nuevo-routing.module';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ConfirmacionModule } from 'src/app/admin/modals/confirmacion/confirmacion.module';

@NgModule({
  declarations: [NuevoComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NuevoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ConfirmacionModule
  ]
})
export class NuevoModule { }
