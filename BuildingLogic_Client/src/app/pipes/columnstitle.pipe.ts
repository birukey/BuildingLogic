import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnstitle'
})
export class ColumnstitlePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}



