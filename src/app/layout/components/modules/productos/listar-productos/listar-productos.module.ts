import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarProductosComponent } from './listar-productos.component';
import { ListarProductoRoutingModule } from './listar-producto-routing.module';
import { ListarProductoPipe } from './pipe/listar-producto.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltarMarcaPipe } from './pipe/filtar-marca.pipe';

@NgModule({
  declarations: [ListarProductosComponent, ListarProductoPipe, FiltarMarcaPipe],
  imports: [
    CommonModule,
    TranslateModule,
    ListarProductoRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],exports:[FiltarMarcaPipe]
})
export class ListarProductosModule { }
