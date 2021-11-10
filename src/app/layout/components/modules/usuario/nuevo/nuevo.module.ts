import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NuevoComponent}from './nuevo.component';
import{NuevoRoutingModule}from './nuevo-routing.module';
import {FormsModule}from '@angular/forms';

@NgModule({
  declarations: [NuevoComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NuevoRoutingModule,
    FormsModule
  ]
})
export class NuevoModule { }
