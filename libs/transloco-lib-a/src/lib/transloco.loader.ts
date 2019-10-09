import {
  Translation,
  TRANSLOCO_LOADER,
  TranslocoLoader
} from '@ngneat/transloco';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const en = require('./i18n/en.json');
const es = require('./i18n/es.json');

@Injectable()
export class CustomLoader implements TranslocoLoader {
  translations: { [key: string]: Translation } = {};

  constructor() {
    this.translations['en'] = en;
    this.translations['es'] = es;
  }

  getTranslation(langPath: string) {
    return of(this.translations[langPath]);
  }
}

export const translocoLoader = {
  provide: TRANSLOCO_LOADER,
  useClass: CustomLoader
};
