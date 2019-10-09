import { TranslocoModule } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { translocoLoader } from './transloco.loader';
import { LocationBComponent } from './location-b.component';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [translocoLoader],
  declarations: [LocationBComponent],
  exports: [LocationBComponent]
})
export class TranslocoLibBModule {}
