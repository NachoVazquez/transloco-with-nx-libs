import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transloco-with-libs-a',
  template: `
    <ng-container *transloco="let t; read: 'libA'">
      <p>where am I? {{ t('gps') }}</p>
    </ng-container>
  `
})
export class LocationAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
