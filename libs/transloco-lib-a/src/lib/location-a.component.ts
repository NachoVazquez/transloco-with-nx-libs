import { Component, OnInit } from '@angular/core';
import { TranslocoService, Translation } from '@ngneat/transloco';

const en = require('./i18n/en.json');
const es = require('./i18n/es.json');

@Component({
  selector: 'transloco-with-libs-a',
  template: `
    <ng-container *transloco="let t">
      <p>where am I? {{ t('gps') }}</p>
    </ng-container>
  `
})
export class LocationAComponent implements OnInit {
  translations: { [key: string]: Translation } = {};
  constructor(private translateService: TranslocoService) {
    this.translations['en'] = en;
    this.translations['es'] = es;
  }

  ngOnInit() {
    this.translateService.setTranslation(en, 'en');
  }
}
