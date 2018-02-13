import { TOSTER_TOKEN, TOSTER_TOKEN1 } from './js-ext-lib-collection/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// js-ext-lib-collection
import { Comp1Component } from './comp1/comp1.component';
import { fnFromToastr } from './js-ext-lib-collection/index';

declare const toastr: any;


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: TOSTER_TOKEN, useValue: toastr}, {provide: 'myFunction', useValue: fnFromToastr}],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    if (TOSTER_TOKEN === TOSTER_TOKEN1) {
      console.log('Both are same');
    } else {
      console.log('Both are different');
    }
  }
}
