import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaPromocionComponent } from './nueva-promocion.component';
import { TranslateModule } from '@ngx-translate/core';
import { NuevaPromocionRoutingModule } from './nueva-promocion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NuevaPromocionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NuevaPromocionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class NuevaPromocionModule { }
