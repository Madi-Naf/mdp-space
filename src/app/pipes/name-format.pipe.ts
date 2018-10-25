import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(name: string): string {
    return name.replace(/[{()}]/g, '');
  }

}
