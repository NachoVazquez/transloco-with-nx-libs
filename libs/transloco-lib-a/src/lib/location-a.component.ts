import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transloco-with-libs-a',
  template: `
    <ng-container *transloco="let t">
      <p>where am I? {{ t('gpsa') }}</p>
    </ng-container>
  `
})
export class LocationAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
