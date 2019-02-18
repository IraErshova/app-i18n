import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-i18n';

  constructor(private readonly translate: TranslateService,
              private readonly renderer: Renderer2,
              private readonly el: ElementRef) {}

  ngOnInit() {
    this.initLang();
    this.translate.onLangChange.subscribe(() => {
      // this.updateHTMLLangAttribute();
    });
  }

  initLang(): void {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en/) ? browserLang : 'en');
  }

  updateHTMLLangAttribute(): void {
    const appRoot = this.el.nativeElement;
    const body = this.renderer.parentNode(appRoot);
    const html = this.renderer.parentNode(body);
    const lang = this.translate.currentLang;

    this.renderer.setAttribute(html, 'lang', lang);
  }
}
