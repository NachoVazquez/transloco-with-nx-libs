import { TranslocoConfigModule } from '@transloco-with-libs/transloco-config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBComponent } from './location-b.component';

const loader = ['en'].reduce((acc: any, lang: string) => {
  acc[lang] = () => import(`../assets/i18n/${lang}.json`);
  return acc;
}, {});

@NgModule({
  imports: [CommonModule, TranslocoConfigModule.forChild('libB', loader)],
  declarations: [LocationBComponent],
  providers: [],
  exports: [LocationBComponent]
})
export class TranslocoLibBModule {}
