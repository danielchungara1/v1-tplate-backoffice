import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {BrandModel} from '../../../models/BrandModel';
import {Page} from '@core/components/paging/Page';
import {BrandService} from '../../../../services/brand/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands: BrandModel[];

  currentPage: Page = {};
  lastSearched: string;

  constructor(public brandService: BrandService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      brands => this.brands = brands,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: BrandModel): void {
    this.onSearch();
  }

  onSearch(searchText = '', pageNumber = 0): void {
    this.brandService.getPage(searchText, pageNumber).subscribe(
      page => {
        this.brands = page.content;
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
