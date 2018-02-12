import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ComponentRef } from '@angular/core/src/linker/component_factory';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(root: AppComponent) {
    this.rootComp = root;
   }

  rootComp; // : ComponentRef<AppComponent>;

  ngOnInit() {
    this.getRootComp(this.rootComp);
  }

  getRootComp(rootComp) {
    console.log(rootComp.rootProp1);
  }

}
