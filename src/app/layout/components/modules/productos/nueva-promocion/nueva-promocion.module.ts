import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaPromocionComponent } from './nueva-promocion.component';
import { TranslateModule } from '@ngx-translate/core';
import { NuevaPromocionRoutingModule } from './nueva-promocion-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NuevaPromocionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NuevaPromocionRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NuevaPromocionModule { }
