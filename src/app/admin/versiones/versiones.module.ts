import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionesRoutingModule } from './versiones-routing.module';
import { VersionesComponent } from './versiones.component';


@NgModule({
  declarations: [VersionesComponent],
  imports: [
    CommonModule,
    VersionesRoutingModule
  ]
})
export class VersionesModule { }
