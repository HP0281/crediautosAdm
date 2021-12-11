import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasPipe } from './marcas.pipe';
import { NamePipe } from './name.pipe';
import { FiltroyearPipe } from './filtroyear.pipe';



@NgModule({
  declarations: [MarcasPipe, NamePipe, FiltroyearPipe],
  imports: [
    CommonModule
  ], exports:[MarcasPipe, NamePipe, FiltroyearPipe]
})
export class PipesModule { }
