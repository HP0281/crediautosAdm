import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(value: any, arg: any): unknown {
    const resultProduct=[];
    
    for(const Vehicle of value){
        if(Vehicle.name.toLowerCase().indexOf(arg.toLowerCase())>-1){
          //console.log("si");
          resultProduct.push(Vehicle);
        }
     
    }
    return resultProduct;
  }

}
