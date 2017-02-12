import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorFilter',
  pure: false
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args || !args.length) {
      return value;
    }
    return value.filter(item => item.colors.some(color => args.includes(color)));
  }
}
