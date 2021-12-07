import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasPipe } from './marcas.pipe';
import { NamePipe } from './name.pipe';



@NgModule({
  declarations: [MarcasPipe, NamePipe],
  imports: [
    CommonModule
  ], exports:[MarcasPipe, NamePipe]
})
export class PipesModule { }
