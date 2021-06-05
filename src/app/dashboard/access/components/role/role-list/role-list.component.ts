import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {RoleModel} from '../../../models/RoleModel';
import {Page} from '@core/components/paging/Page';
import {RoleService} from '../../../../business/services/role/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: RoleModel[];

  currentPage: Page = {};
  lastSearched: string;

  constructor(private searchService: RoleService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  public loadRoles(): void {
    this.searchService.getAll().subscribe(
      roles => this.roles = roles,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: RoleModel): void {
    this.onSearch();
  }

  onSearch(searchText = '', pageNumber = 0): void {
    this.searchService.getPage(searchText, pageNumber).subscribe(
      page => {
        this.roles = page.content;
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
