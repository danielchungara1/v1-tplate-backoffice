import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {ProductModel} from '../../../models/ProductModel';
import {CategoryListService} from '../../../../business/services/category/category-list.service';
import {ProductListService} from '../../../../business/services/product/product-list.service';
import {Page} from '@core/components/paging/Page';
import {ProductSearchService} from '../../../../business/services/product/product-search.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  models: ProductModel[];

  currentPage: Page = {};
  lastSearched: string;

  constructor(private searchService: ProductSearchService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  public loadModels(): void {
    this.searchService.getAll().subscribe(
      models => this.models = models,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: ProductModel): void {
    this.onSearch();
  }

  onSearch(searchText = '', pageNumber = 0): void {
    this.searchService.getPage(searchText, pageNumber).subscribe(
      page => {
        this.models = page.content;
        this.currentPage.length = page.totalElements;
        this.currentPage.pageSize = page.size;
        this.currentPage.index = page.number;
        this.currentPage.totalPages = page.totalPages;
        this.lastSearched = searchText;
      },
      error => this.notificationService.showError(error)
    );
  }

  onPageChange(pageNumber: number): void {
    this.onSearch(this.lastSearched, pageNumber);
  }

}
