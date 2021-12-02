import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import{ListarRoutingModule}from './listar-routing.module';
import {ListarComponent}from './listar.component';

import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinner, MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserModule } from 'src/app/admin/modals/user/user.module';
import { UserComponent } from 'src/app/admin/modals/user/user.component';




@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ListarRoutingModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    UserModule,
    MatDialogModule,
  ],
  exports: [ListarComponent],
  entryComponents: [UserComponent]
})

export class ListarModule { }
