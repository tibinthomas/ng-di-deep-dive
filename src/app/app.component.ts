import { Component, OnInit, Inject, Optional } from '@angular/core';
import { TOSTER_TOKEN } from './js-ext-lib-collection/toastr.service';
import { JService } from './js-ext-lib-collection/jquery.service';
declare const toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(@Inject(TOSTER_TOKEN) private Toastr: any,
              @Inject('myFunction') private DependencyFunc: any) {
    this.rootProp1 = 10;
    this.jserviceInstance = new JService();
   }

  private rootProp1: number;
  private jserviceInstance;

  ngOnInit() {
    console.log(`From JService: ${this.jserviceInstance.myJPro}`);
    this.DependencyFunc();
  }

  callToastr() {
    this.Toastr.success('My first Service Token');
  }

}
