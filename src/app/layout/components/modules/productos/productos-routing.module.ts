import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from '../productos/productos.component';


const routes: Routes = [
  {path: '',component:ProductosComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
 // { path: 'listar', loadChildren: () => import('./listar/listar.module').then(m => m.ListarModule)},
  { path: 'nuevo-producto', loadChildren: () => import('./nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule)},
  { path: 'listar-productos', loadChildren: () => import('./listar-productos/listar-productos.module').then(m => m.ListarProductosModule)},
  { path: 'galeria-productos', loadChildren: () => import('./galeria-productos/galeria-productos.module').then(m => m.GaleriaProductosModule)},
  { path: 'promociones', loadChildren: () => import('./promociones/promociones/promociones.module').then(m => m.PromocionesModule)},
  { path: 'editar-producto', loadChildren: () => import('../productos/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule)},
  {path: '**', redirectTo: 'dasboard', pathMatch: 'full'}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
