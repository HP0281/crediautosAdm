import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material/material.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[UserComponent]
})
export class UserModule { }
