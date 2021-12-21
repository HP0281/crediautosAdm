import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EditarPromocionRoutingModule } from './editar-promocion-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    EditarPromocionRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarPromocionModule { }
