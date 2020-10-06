import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';
import { FormsModule } from '@angular/forms';
import { ProcessingQueueComponent } from './processing-queue/processing-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    ProcessingQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
