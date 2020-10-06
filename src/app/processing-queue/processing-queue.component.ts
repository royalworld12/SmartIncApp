import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-processing-queue',
  templateUrl: './processing-queue.component.html',
  styleUrls: ['./processing-queue.component.scss']
})
export class ProcessingQueueComponent implements OnInit {

  private currentPage = 1;
  private itemsPerPage = 4;
  private items = [{
    "created" : "28-Apr-2020",
    "title" : "Webinar Suppression List",
    "input_record" : 1580,
    "valid_record" : 1580,
    "action" : "Add Emails",
    "by" : "Mark Henry",
    "list_name" : "Do Not Disturb",
    "status": "In Progress"
},
{
  "created" : "30-Apr-2020",
  "title" : "Delete Suppression List - ERP contacts",
  "input_record" : 2000,
  "valid_record" : 2000,
  "action" : "Delete List",
  "by" : "Mark Henry",
  "list_name" : "New Suppression List",
  "status": "In Progress"
}, {
  "created" : "31-Apr-2020",
  "title" : "Webinar Suppression List",
  "input_record" : 1580,
  "valid_record" : 1580,
  "action" : "Add List",
  "by" : "Chris Jerico",
  "list_name" : "Do Not Disturb",
  "status": "Queued"
}, {
  "created" : "28-Apr-2020",
  "title" : "Webinar Suppression List",
  "input_record" : 1580,
  "valid_record" : 1580,
  "action" : "Add Emails",
  "by" : "Mark Henry",
  "list_name" : "Do Not Disturb",
  "status": "In Progress"
},
{
"created" : "30-Apr-2020",
"title" : "Delete Suppression List - ERP contacts",
"input_record" : 2000,
"valid_record" : 2000,
"action" : "Delete List",
"by" : "Mark Henry",
"list_name" : "New Suppression List",
"status": "In Progress"
}, {
"created" : "02-May-2020",
"title" : "Webinar Suppression List",
"input_record" : 1580,
"valid_record" : 1580,
"action" : "Add List",
"by" : "Chris Jerico",
"list_name" : "Do Not Disturb",
"status": "Queued"
}, {
  "created" : "03-May-2020",
  "title" : "Webinar Suppression List",
  "input_record" : 1580,
  "valid_record" : 1580,
  "action" : "Add Emails",
  "by" : "Mark Henry",
  "list_name" : "Do Not Disturb",
  "status": "In Progress"
},
{
"created" : "4-May-2020",
"title" : "Delete Suppression List - ERP contacts",
"input_record" : 2000,
"valid_record" : 2000,
"action" : "Delete List",
"by" : "Mark Henry",
"list_name" : "New Suppression List",
"status": "In Progress"
}, {
"created" : "10-May-2020",
"title" : "Webinar Suppression List",
"input_record" : 1580,
"valid_record" : 1580,
"action" : "Add List",
"by" : "Chris Jerico",
"list_name" : "Do Not Disturb",
"status": "Queued"
}];
  itemsToShow = [];
  private totalPage = this.items.length/this.itemsPerPage;
  private indexPoint = 0;
  public isFullListDisplayed: boolean = false;
  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;
   constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    let data = Array.from(this.items);
    if(this.itemsToShow.length > 0){
      this.itemsToShow.push(...(data.splice(this.indexPoint,this.itemsPerPage)));
    }else{
      this.itemsToShow = data.splice(this.indexPoint,this.itemsPerPage);
    }
    this.indexPoint = this.currentPage * this.itemsPerPage + 1;
  }
  
    onScroll($event) {
    let element = this.myScrollContainer.nativeElement
    let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    if (atBottom) {
      if(this.currentPage < this.totalPage){
     this.currentPage++;
     this.init();
      }
    }
  }

 

}
