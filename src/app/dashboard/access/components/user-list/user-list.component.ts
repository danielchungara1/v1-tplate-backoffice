import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {UserListService} from '../../../business/services/user-list.service';
import {NotificationService} from '@shared/notifications/notification.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserModel[];

  constructor(private userListService: UserListService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(): void {
    this.userListService.getUsers().subscribe(
      users => this.users = users,
      error => this.notificationService.showError(error)
    );
  }

}
