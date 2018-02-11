import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// js-ext-lib-collection
import { TOSTER_TOKEN } from './js-ext-lib-collection/index';

declare const toastr: any;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: TOSTER_TOKEN, useValue: toastr}],
  bootstrap: [AppComponent]
})

export class AppModule { }
