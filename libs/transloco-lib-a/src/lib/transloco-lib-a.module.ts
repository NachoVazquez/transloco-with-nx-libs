import { TranslocoConfigModule } from '@transloco-with-libs/transloco-config';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationAComponent } from './location-a.component';

const loader = ['en'].reduce((acc: any, lang: string) => {
  acc[lang] = () => import(`../assets/i18n/${lang}.json`);
  return acc;
}, {});

const routes = [
  {
    path: '',
    component: LocationAComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoConfigModule.forChild('libA', loader)
  ],
  declarations: [LocationAComponent],
  exports: [LocationAComponent]
})
export class TranslocoLibAModule {}
