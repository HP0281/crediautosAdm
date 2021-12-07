import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marcas'
})
export class MarcasPipe implements PipeTransform {

  transform(value: any, arg: any): unknown {
    const resultProduct=[];
    
    for(const Vehicle of value){
        if(Vehicle.marca.toLowerCase().indexOf(arg.toLowerCase())>-1){
          //console.log("si");
          resultProduct.push(Vehicle);
        }
     
    }
    return resultProduct;
  }

}
