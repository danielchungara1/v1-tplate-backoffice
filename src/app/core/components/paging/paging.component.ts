import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '@core/components/paging/Page';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

  @Input()
  page: Page;

  @Output()
  newPage$: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }


  pageChange($event: PageEvent): void {
    this.newPage$.emit($event.pageIndex);
  }

}
