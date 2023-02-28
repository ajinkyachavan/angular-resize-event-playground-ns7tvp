import { Component, VERSION } from '@angular/core';

import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width = 0;
  height = 0;
  count = 0;

  onResized(event: ResizedEvent): void {
    console.log('resizing=x==x', this.count);
    this.count += 1;
    this.width = Math.round(event.newRect.width);
    this.height = Math.round(event.newRect.height);
  }
}
