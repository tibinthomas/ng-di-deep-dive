import { Component, OnInit, Inject, Optional } from '@angular/core';
import { TOSTER_TOKEN } from './js-ext-lib-collection/toastr.service';
declare const toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(@Inject(TOSTER_TOKEN) private Toastr: any ) { this.rootProp1 = 10; }

  private rootProp1: number;

  ngOnInit() {
  }

  callToastr() {
    this.Toastr.success('My first Service Token');
  }

}
