import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionesRoutingModule } from './versiones-routing.module';
import { VersionesComponent } from './versiones.component';
import { ListVersionesComponent } from './list-versiones/list-versiones.component';
import { NewVersionesComponent } from './new-versiones/new-versiones.component';


@NgModule({
  declarations: [VersionesComponent, ListVersionesComponent, NewVersionesComponent],
  imports: [
    CommonModule,
    VersionesRoutingModule
  ]
})
export class VersionesModule { }
