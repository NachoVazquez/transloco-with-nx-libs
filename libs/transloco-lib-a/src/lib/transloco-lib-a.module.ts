import { RouterModule } from '@angular/router';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { translocoLoader } from './transloco.loader';
import { LocationAComponent } from './location-a.component';

const routes = [
  {
    path: '',
    component: LocationAComponent
  }
];
@NgModule({
  imports: [CommonModule, TranslocoModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'es'],
        defaultLang: 'en'
      } as TranslocoConfig
    },
    translocoLoader
  ],
  declarations: [LocationAComponent],
  exports: [LocationAComponent]
})
export class TranslocoLibAModule {}
