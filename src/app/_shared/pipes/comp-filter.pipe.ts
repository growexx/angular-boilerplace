import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compFilter'
})
export class CompFilterPipe implements PipeTransform {
  list :any;
  transform(items: any[], searchText: string): any[] {
    console.log(items)
    if (items?.length===0) {
      console.log(items)
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    
      this.list= items.filter(it => {
      return it.firstName.toLocaleLowerCase().includes(searchText) || it.company.department.toLocaleLowerCase().includes(searchText);
    });
  return this.list;
  }
}

