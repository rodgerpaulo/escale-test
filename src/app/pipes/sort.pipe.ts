import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any, filter: Object): any {
    if (!items || !filter) {
      return items
    }
    // return items.filter(item => item.title.indexOf(filter.title) !== -1);
  }

}
