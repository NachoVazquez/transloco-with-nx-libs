import { TranslocoModule } from '@ngneat/transloco';
import { NgModule } from '@angular/core';

import { LocationCComponent } from './component-c.component';

@NgModule({
  imports: [TranslocoModule],
  exports: [LocationCComponent],
  declarations: [LocationCComponent],
  providers: []
})
export class LocationCModule {}
