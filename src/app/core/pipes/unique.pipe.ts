import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})


export class UniquePipe implements PipeTransform {
  uniqueArray:any;
  result:any;
initialObjArray:any;
  transform(value:any[]): any[] {

this.result =  []
value?.forEach(item => {
  let count = this.result.filter((x: { completed: any; }) => x.completed == item.completed).length

  if(count == 0) {
    this.result.push(item)
  }
})
return this.result;
  }

}
