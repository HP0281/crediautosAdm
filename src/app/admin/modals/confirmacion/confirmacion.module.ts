import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmacionRoutingModule } from './confirmacion-routing.module';
import { ConfirmacionComponent } from './confirmacion.component';
import { MaterialModule } from 'src/app/shared/material/material/material.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ConfirmacionComponent],
  imports: [
    CommonModule,
    ConfirmacionRoutingModule,
    MaterialModule,
    MatButtonModule
  ],
  exports: [ConfirmacionComponent]
})
export class ConfirmacionModule { }
