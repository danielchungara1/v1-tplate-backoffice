import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {CrudService} from '@core/crud/crud.service';
import {ResultSearch} from '@core/abstract/ResultSearch';


@Component({
  selector: 'app-paginator',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent<T> implements OnInit, AfterViewChecked {

  @Input()
  crudService: CrudService<T>;

  resultSearch: ResultSearch<T>;

  constructor() {
  }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe(
      (resultSearch: ResultSearch<T>) => {
        this.resultSearch = resultSearch;
      }
    );
  }

  pageChange($event: PageEvent): void {
    this.crudService.searchAndEmit(this.resultSearch.searchText, $event.pageIndex);
  }

  ngAfterViewChecked(): void {
    const list = document.getElementsByClassName('mat-paginator-range-label');

    if (list.length > 0) {
      list[0].innerHTML = 'Total Results ' + this.resultSearch?.page?.totalElements;
    }

  }

}
