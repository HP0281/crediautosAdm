import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
