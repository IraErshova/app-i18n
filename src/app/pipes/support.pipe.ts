import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'support'
})
export class SupportPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(type: number, args?: any): Observable<string> {
    switch (type) {
      case 1:
        return this.translate.get('HOME.SUPPORT.email');
      case 2:
        return this.translate.get('HOME.SUPPORT.priority');
      case 3:
        return this.translate.get('HOME.SUPPORT.phone');

      default:
        return this.translate.get('HOME.SUPPORT.error');
    }
  }

}
