import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductosRoutingModule } from '../productos/productos-routing.module';
import { ProductosComponent } from './productos.component';
import { NuevaPromocionComponent } from './nueva-promocion/nueva-promocion.component';
import { EditarPromocionComponent } from './editar-promocion/editar-promocion.component';


//import { GaleriaProductosComponent } from './galeria-productos/galeria-productos.component';
//import { CategoriaComponent } from './categoria/categoria.component';
//import { ListarProductosComponent } from './listar-productos/listar-productos.component';
//import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';



@NgModule({
  declarations: [ProductosComponent, EditarPromocionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
