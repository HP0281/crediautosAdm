import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarProductosComponent } from './listar-productos.component';
import { ListarProductoRoutingModule } from './listar-producto-routing.module';
import { ListarProductoPipe } from './pipe/listar-producto.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltarMarcaPipe } from './pipe/filtar-marca.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ListarProductosComponent, ListarProductoPipe, FiltarMarcaPipe],
  imports: [
    CommonModule,
    TranslateModule,
    ListarProductoRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,

  ],exports:[FiltarMarcaPipe]
})
export class ListarProductosModule { }
