import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar.component';
import { TranslateModule } from '@ngx-translate/core';
import { EditarRoutingModule } from './editar-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    EditarRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarModule { }
