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

  constructor(private searchService: PermissionSearchService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {

    this.loadPermissions();

    // this.currentPage = {length: 20, pageSize: 10, index: 1};

  }

  public loadAllPermissions(): void {
    this.searchService.getPermissions().subscribe(
      permissions => this.permissions = permissions,
      error => this.notificationService.showError(error)
    );
  }

  onPageChange($event: number): void {
    console.log($event);
    this.currentPage.index = 1;
  }

  onSearch(searchText): void {
    this.searchService.getPage(searchText, 0).subscribe(
      page => this.permissions = page.content,
      error => this.notificationService.showError(error)
    );
  }

  private loadPermissions(): void{
    this.onSearch('');
  }

}
