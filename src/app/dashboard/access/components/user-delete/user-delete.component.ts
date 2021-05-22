import {Component, Input, OnInit} from '@angular/core';
import {UserDeleteService} from '../../../business/services/user-delete.service';
import {NotificationService} from '@shared/notifications/notification.service';
import {ConfirmationService} from 'primeng/api';
import {UserModel} from '../../models/UserModel';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  @Input()
  user: UserModel;

  constructor(private userDeleteService: UserDeleteService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    // For testing use route: http://localhost:4200/dashboard/delete-user
    // The user must be into DB.
    // this.user = {
    //   id: 21,
    //   username: 'administrator+13'
    //   email: '',
    //   lastname: '',
    //   name: '',
    //   password: '',
    //   phone: '',
    //   role: undefined,
    // };

    // Input validation
    if (!this.user) {
      throw new Error(`User model is required for ${this.constructor.name}.`);
    }
    if (!this.user.id) {
      throw new Error(`User ID is required for ${this.constructor.name}.`);
    }
  }

  deleteUser(): void {
    this.confirmationService.confirm({
      message: `Delete user ${this.user.username} (ID ${this.user.id})?`,
      accept: () => {
        this.userDeleteService.deleteUser(this.user.id)
          .subscribe(
            message => this.notificationService.showSuccess(message),
            error => this.notificationService.showError(error),
            () => this.confirmationService.close()
          );
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: this.user.id.toString()
    });
  }

}
