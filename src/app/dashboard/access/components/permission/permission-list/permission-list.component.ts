import {Component, OnInit} from '@angular/core';
import {PermissionModel} from '../../../models/PermissionModel';
import {NotificationService} from '@shared/notifications/notification.service';
import {Page} from '@core/components/paging/Page';
import {PermissionSearchService} from '../../../../business/services/permission/permission-search.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {

  permissions: PermissionModel[];
  currentPage: Page;
  lastSearched: string;

  constructor(private searchService: PermissionSearchService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {

    this.loadPermissions();
    this.currentPage = {totalPages: 0, length: 0, pageSize: 0, index: 0};

  }

  public loadAllPermissions(): void {
    this.searchService.getPermissions().subscribe(
      permissions => this.permissions = permissions,
      error => this.notificationService.showError(error)
    );
  }

  onPageChange(pageNumber: number): void {
    this.onSearch(this.lastSearched, pageNumber);
  }

  onSearch(searchText: string, pageNumber = 0): void {
    this.searchService.getPage(searchText, pageNumber).subscribe(
      page => {
        this.permissions = page.content;
        this.currentPage.length = page.totalElements;
        this.currentPage.pageSize = page.size;
        this.currentPage.index = page.number;
        this.currentPage.totalPages = page.totalPages;
        this.lastSearched = searchText;
      },
      error => this.notificationService.showError(error)
    );
  }

  private loadPermissions(): void {
    this.onSearch('', 0);
  }

}
