import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'tariffButton'
})
export class TariffButtonPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(type: number, args?: any): Observable<string> {
    switch (type) {
      case 1:
        return this.translate.get('HOME.BUTTON.free');
      case 2:
        return this.translate.get('HOME.BUTTON.start');
      case 3:
        return this.translate.get('HOME.BUTTON.contact');

      default:
        return this.translate.get('HOME.BUTTON.error');
    }
  }

}
