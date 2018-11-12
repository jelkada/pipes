
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string) {
    console.log('filter: ' + filter);
    if (filter !== 'all') {
      const resultArray = [];
      for (const item of value) {
        console.log('item: ' + item);
        if (item['status'] === filter) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
    return value;
  }

}
