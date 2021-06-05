import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {ConfirmationService} from 'primeng/api';
import {UserModel} from '../../../models/UserModel';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {UserService} from '../../../../services/user/user.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  @Input()
  model: UserModel;

  @Output()
  deleted: EventEmitter<UserModel> = new EventEmitter();
  isCurrentUser = false;

  constructor(private service: UserService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService,
              private localStorageService: LocalStorageService) {
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
    if (!this.model) {
      throw new Error(`User model is required for ${this.constructor.name}.`);
    }
    if (!this.model.id) {
      throw new Error(`User ID is required for ${this.constructor.name}.`);
    }

    if (this.localStorageService.getUser()?.id === this.model.id) {
      this.isCurrentUser = true;
    }

  }

  delete(): void {
    this.confirmationService.confirm({
      message: `Delete user ${this.model.username} (ID ${this.model.id})?`,
      accept: () => {
        this.service.delete(this.model.id)
          .subscribe(
            message => {
              this.notificationService.showSuccess(message);
              this.deleted.emit(this.model);
            },
            error => this.notificationService.showError(error),
            () => this.confirmationService.close()
          );
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: this.model.id.toString()
    });
  }

}
