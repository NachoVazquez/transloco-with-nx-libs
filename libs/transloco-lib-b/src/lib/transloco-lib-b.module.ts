import { TranslocoModule } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBComponent } from './location-b.component';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [LocationBComponent],
  exports: [LocationBComponent]
})
export class TranslocoLibBModule {}
