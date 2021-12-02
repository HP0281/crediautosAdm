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
    MatInputModule
  ]
})
export class NuevoModule { }
