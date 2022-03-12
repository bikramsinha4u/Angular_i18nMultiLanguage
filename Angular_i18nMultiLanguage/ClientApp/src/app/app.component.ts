import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' }
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}
