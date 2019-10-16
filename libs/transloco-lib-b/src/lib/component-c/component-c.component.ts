import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transloco-with-libs-c',
  template: `
    <ng-container *transloco="let t; read: 'libB'">
      <p>where am I? {{ t('gps-c') }}</p>
    </ng-container>
  `
})
export class LocationCComponent implements OnInit {
  ngOnInit() {}
}
