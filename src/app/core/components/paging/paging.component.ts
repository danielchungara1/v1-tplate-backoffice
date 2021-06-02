import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '@core/components/paging/Page';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, AfterViewChecked {

  @Input()
  page: Page;

  @Output()
  newPage$: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    const list = document.getElementsByClassName('mat-paginator-range-label');
    list[0].innerHTML = 'Total Results ' + this.page?.length;
    // + '</br>' +
    // ' Page ' + (this.page?.index + 1) +
    // ' Of ' + (this.page?.totalPages);
  }

  pageChange($event: PageEvent): void {
    this.newPage$.emit($event.pageIndex);
  }

}
