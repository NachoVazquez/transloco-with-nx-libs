import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transloco-with-libs-b',
  template: `
    <ng-container *transloco="let t">
      <p>where am I? {{ t('gps') }}</p>
    </ng-container>
  `
})
export class LocationBComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
