import { TranslocoConfigModule } from '@transloco-with-libs/transloco-config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBComponent } from './location-b.component';

// const loader = ['en'].reduce((acc: any, lang: string) => {
//   acc[lang] = () => import(`../assets/i18n/${lang}.json`);
//   return acc;
// }, {});

export function en() {
  return import(`../assets/i18n/en.json`);
}

export function es() {
  return import(`../assets/i18n/es.json`);
}

@NgModule({
  imports: [CommonModule, TranslocoConfigModule.forChild('libB', {en, es})],
  declarations: [LocationBComponent],
  providers: [],
  exports: [LocationBComponent]
})
export class TranslocoLibBModule {}
