import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {RoleModel} from '../../../models/RoleModel';
import {Page} from '@core/components/paging/Page';
import {RoleSearchService} from '../../../../business/services/role/role-search.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: RoleModel[];

  currentPage: Page = {};
  lastSearched: string;

  constructor(private searchService: RoleSearchService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  public loadRoles(): void {
    this.searchService.getRoles().subscribe(
      roles => this.roles = roles,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: RoleModel): void {
    this.roles =
      this.roles.filter(role => role.id !== $event.id);
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
