import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'support'
})
export class SupportPipe implements PipeTransform {

  transform(type: number, args?: any): string {
    switch (type) {
      case 1:
        return 'Email support';
      case 2:
        return 'Priority email support';
      case 3:
        return 'Phone and email support';

      default:
        return 'Error';
    }
  }

}
