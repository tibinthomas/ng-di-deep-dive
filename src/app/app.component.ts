import { Component, OnInit } from '@angular/core';
declare const toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    toastr.success('Helloo');
    console.log(
      $('body')
    );
  }

}
