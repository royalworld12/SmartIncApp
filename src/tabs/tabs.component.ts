/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
  selector: 'my-tabs',
  template: `
    <ul class="tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a ><i class="fa fa-{{tab.icon}}"></i>{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [
    `
    .tabs{
      display: flex;
      list-style: none;
      padding-left: 0px;
      border-bottom : 1px solid #ccc;
    }

    .tabs li{
      margin-right : 15px;
    }

    .tabs li.active{
      border-bottom : 2px solid #0070d2;
    }

    .tabs li a{
      text-decoration : none;
      color : #575757;
      cursor:pointer;
    }

    .tabs li a i{
      padding-right : 5px;
    }
    .tab-close {
      color: gray;
      text-align: right;
      cursor: pointer;
    }
    `
  ]
})
export class TabsComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    console.log(this.tabs)
    let activeTabs = this.tabs.filter((tab)=>tab.active);
   
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
      
    }
  }
  
  selectTab(tab){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
