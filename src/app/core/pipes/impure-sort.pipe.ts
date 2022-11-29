import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureSort',
  pure: false

})
export class ImpureSortPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    return value.slice().sort((x, y) => x - y);
  }

}
