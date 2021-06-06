import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {CategoryModel} from '../../../models/CategoryModel';
import {Page} from '@core/components/paging/Page';
import {CategoryService} from '../../../../services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  models: CategoryModel[];

  currentPage: Page = {};
  lastSearched: string;

  additionalDeleteMessage = `The category and all its descendants categories will be deleted.` + '<br/>' +
    `In addition, the products that have some category of the hierarchy will be reset their category.`;

  constructor(public categoryService: CategoryService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  public loadModels(): void {
    this.categoryService.getAll().subscribe(
      models => this.models = models,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: CategoryModel): void {
    this.onSearch();
  }

  onSearch(searchText = '', pageNumber = 0): void {
    this.categoryService.getPage(searchText, pageNumber).subscribe(
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
