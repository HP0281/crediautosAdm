import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionesRoutingModule } from './versiones-routing.module';
import { VersionesComponent } from './versiones.component';
import { ListVersionesComponent } from './list-versiones/list-versiones.component';
import { NewVersionesComponent } from './new-versiones/new-versiones.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ListVersionesModule } from './list-versiones/list-versiones.module';
import { NewVersionesModule } from './new-versiones/new-versiones.module';


@NgModule({
  declarations: [VersionesComponent],
  imports: [
    CommonModule,
    VersionesRoutingModule,
    MatTabsModule,
    ListVersionesModule,
    NewVersionesModule
  ]
})
export class VersionesModule { }
