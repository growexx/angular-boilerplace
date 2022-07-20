import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchString: string, key: string): any[] {
    if (!items || items.length === 0) {
      return [];
    }
    if (!searchString) {
      return items;
    }
    searchString = searchString.toString().toLowerCase();
    if (key === 'users.firstName') {
      return items.filter(it => {
        return it.firstName.toLowerCase().includes(searchString);
      });
    } else {
      return items.filter(it => {
        return it.itemName.toLowerCase().includes(searchString);
      });
    }
  }
}
