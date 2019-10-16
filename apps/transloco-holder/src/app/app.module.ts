import { TranslocoConfigModule } from '@transloco-with-libs/transloco-config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import {
  TranslocoLibBModule,
  LocationCModule
} from '@transloco-with-libs/transloco-lib-b';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoConfigModule.forRoot(environment.production),
    TranslocoLibBModule,
    LocationCModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
