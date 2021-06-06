import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {NotificationService} from '@shared/notifications/notification.service';
import {UserService} from '../../../../services/user/user.service';
import {Page} from '@core/components/paging/Page';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserModel[];

  currentPage: Page = {};
  lastSearched: string;

  constructor(public userService: UserService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  public loadUsers(): void {
    this.userService.getAll().subscribe(
      users => this.users = users,
      error => this.notificationService.showError(error)
    );
  }

  onDeleted($event: UserModel): void {
    this.onSearch();
  }

  onSearch(searchText = '', pageNumber = 0): void {
    this.userService.getPage(searchText, pageNumber).subscribe(
      page => {
        this.users = page.content;
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
