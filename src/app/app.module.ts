import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularResizeEventModule } from 'angular-resize-event';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularResizeEventModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
