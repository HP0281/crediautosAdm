import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listarProducto'
})
export class ListarProductoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProducto=[];
    for(const producto of value){
      if(producto.nombreProducto.toLowerCase().indexOf(arg.toLowerCase())>-1){
        
        resultProducto.push(producto);
      }else if(producto.empresa.razonSocial.toLowerCase().indexOf(arg.toLowerCase())>-1){
        
        resultProducto.push(producto);
      }
    }
    return resultProducto;
  }
}
