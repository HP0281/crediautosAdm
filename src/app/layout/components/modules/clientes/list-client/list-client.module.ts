import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientRoutingModule } from './list-client-routing.module';
import { ListClientComponent } from './list-client.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ListClientComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ListClientRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],exports:[ListClientComponent]
})
export class ListClientModule { }
