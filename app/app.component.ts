import { Component } from '@angular/core';
import {ElementRef, HostBinding, Input, OnChanges} from '@angular/core';

import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  
  raedMore:boolean = false;
  visible:boolean = false;


  onClick(){
    this.raedMore = !this.raedMore
    this.visible = !this.visible

  }
}
