import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any, filter: any, prop: string): any {
    if (!items || !filter || filter.value == -1) {
      return items
    }
    console.log(items, filter);
    return items.filter(function(item){
      item[prop] = (item[prop] || 'not especified');
      if (item[prop].indexOf(filter.label) !== -1) {
        return true;
      }
    });
    // return items.filter(item => item.label.indexOf(filter.label) !== -1);
  }

}
