import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasPipe } from './marcas.pipe';



@NgModule({
  declarations: [MarcasPipe],
  imports: [
    CommonModule
  ], exports:[MarcasPipe]
})
export class PipesModule { }
