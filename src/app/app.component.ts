import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmarteIncApp';
  searchString: string = '';
  suppression_list = [{
    'Srno': 1,
    'list_name': 'Already Contacted',
    'modified': '01-Sep-2020 1:10:20 PM',
    'modified_by': 'Chris Jerico',
    'record': '2222'
  },
  {
    'Srno': 2,
    'list_name': 'Marketo Leads',
    'modified': '04-Sep-2020 12:10:20 PM',
    'modified_by': 'Mark Henry',
    'record': '2232'
  },
  {
    'Srno': 3,
    'list_name': 'Marketo Leads',
    'modified': '10-Sep-2020 3:10:20 PM',
    'modified_by': 'Chris Jerico',
    'record': '4213'
  },
  {
    'Srno': 4,
    'list_name': 'Already Contacted',
    'modified': '12-Sep-2020 2:10:20 PM',
    'modified_by': 'John Nick',
    'record': '3445'
  },
  {
    'Srno': 5,
    'list_name': 'Do Not Disturb',
    'modified': '12-Sep-2020 2:20:20 PM',
    'modified_by': 'Dwenn Samuel',
    'record': '13465'
  },
  {
    'Srno': 6,
    'list_name': 'Marketo Leads',
    'modified': '13-Sep-2020 1:10:20 PM',
    'modified_by': 'Chris Jerico',
    'record': '3222'
  },
  {
    'Srno': 7,
    'list_name': 'Do Not Disturb',
    'modified': '15-Sep-2020 1:10:20 PM',
    'modified_by': 'John Nick',
    'record': '1999'
  },
  {
    'Srno': 8,
    'list_name': 'Already Contacted',
    'modified': '20-Sep-2020 1:10:20 PM',
    'modified_by': 'Dwenn Samuel',
    'record': '1355'
  },
  {
    'Srno': 9,
    'list_name': 'Already Contacted',
    'modified': '21-Sep-2020 1:10:20 PM',
    'modified_by': 'Dwenn Samuel',
    'record': '2344'
  },
  {
    'Srno': 10,
    'list_name': 'Marketo Leads',
    'modified': '22-Sep-2020 1:10:20 PM',
    'modified_by': 'Mark Henry',
    'record': ''
  },
  {
    'Srno': 11,
    'list_name': 'Marketo Leads',
    'modified': '24-Sep-2020 1:10:20 PM',
    'modified_by': 'John Nick',
    'record': '32'
  },
  {
    'Srno': 12,
    'list_name': 'Already Contacted',
    'modified': '25-Sep-2020 1:10:20 PM',
    'modified_by': 'Dwenn Samuel',
    'record': '45'
  },
  {
    'Srno': 13,
    'list_name': 'Already Contacted',
    'modified': '26-Sep-2020 1:10:20 PM',
    'modified_by': 'John Nick',
    'record': '34'
  },
  {
    'Srno': 14,
    'list_name': 'Already Contacted',
    'modified': '27-Sep-2020 1:10:20 PM',
    'modified_by': 'Mark Henry',
    'record': '12'
  },
  {
    'Srno': 15,
    'list_name': 'Do Not Disturb',
    'modified': '28-Sep-2020 1:10:20 PM',
    'modified_by': 'Dwenn Samuel',
    'record': '123'
  },
  {
    'Srno': 16,
    'list_name': 'Do Not Disturb',
    'modified': '29-Sep-2020 1:10:20 PM',
    'modified_by': 'Mark Henry',
    'record': '234'
  }
  ]
  ListItems = this.suppression_list;
  filteredItems = this.ListItems;
  keys = Object.keys(this.suppression_list[0]);
  totalCount: number;
  pageNumber: number = 0;
  pages: number = 5;
  pageSize: number = 4;
  currentIndex: number = 1;
  pagesIndex: Array<number> = [];
  pageStart: number = 1;
  subscription: any;
  paginationDetails = {
    pageSize: 10,
    pageNumber: 1,
    page: ''
  };

  ngOnInit() {
    this.totalCount = this.ListItems.length;
    this.init()
  }

  filterItems() {
    let dummyFilterstring = this.searchString.slice(0);
    dummyFilterstring = dummyFilterstring.trim();

    if (dummyFilterstring !== "") {
      dummyFilterstring = this.processInputstring(dummyFilterstring);
      let exp = ".+?(?=" + dummyFilterstring + ")" + '|' + "^" + dummyFilterstring;
      let rx = new RegExp(exp, 'i');

      this.ListItems = this.suppression_list.filter(element => {
        for (let i = 0; i < this.keys.length; i++) {
          if (element[this.keys[i]] !== null && element[this.keys[i]] !== undefined &&
            (isNaN(element[this.keys[i]]) ? element[this.keys[i]].match(rx) : String(element[this.keys[i]]).match(rx)))
            return element;
        }
      });

      this.filteredItems = this.ListItems;
      this.init();
    }
    else {
      this.ListItems = this.suppression_list;
      this.filteredItems = this.ListItems;
      this.init();

    }
  }

  processInputstring(inputString) {
    let specialcharArray = ['\\', '|', '(', ')', '[', ']', '^', '$', '*', '+', '?', '.', '<', '>', '&']
    let charArray = inputString.split("");
    for (let i = 0; i < charArray.length; i++) {
      for (let j = 0; j < specialcharArray.length; j++) {
        if (charArray[i] == specialcharArray[j]) {
          charArray[i] = "\\" + charArray[i];
          break;
        }
      }
    }
    return charArray.join("");
  }

  init() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;
    this.pageNumber = parseInt("" + (this.ListItems.length / this.pageSize));
    if (this.filteredItems.length % this.pageSize != 0) {
      this.pageNumber++;
    }
    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.currentIndex = (this.pageNumber > 0) ? 1 : 0;
    this.refreshItems();
  }

  fillArray(): any {
    var obj = new Array();
    for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }

  refreshItems() {
    this.ListItems = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    // this.onDisplayList.emit(this.items);
    this.pagesIndex = this.fillArray();
  }

  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }

  nextPage() {

    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }

    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }

  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }

  setPagesize(index: number) {
    this.pageSize = index;
    this.init();
    this.refreshItems();
  }

}
