import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], seachString: string): any[] {
    if (!items) {
      return [];
    }
    if (!seachString){
      return items;
    }
    seachString = seachString.toString().toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(seachString);
    });
  }
}
