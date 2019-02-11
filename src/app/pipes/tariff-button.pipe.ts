import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tariffButton'
})
export class TariffButtonPipe implements PipeTransform {

  transform(type: number, args?: any): string {
    switch (type) {
      case 1:
        return 'Sign up for free';
      case 2:
        return 'Get started';
      case 3:
        return 'Contact us';

      default:
        return 'Error';
    }
  }

}
