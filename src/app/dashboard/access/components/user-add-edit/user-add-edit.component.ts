import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {UserModel} from '../../models/UserModel';
import {UserAddEditService} from '../../../business/services/user-add-edit.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {

  userForm: FormGroup;

  user: UserModel;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private userAddEditService: UserAddEditService) {
  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
      name: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      role: [null]
    });
  }

  createUser(): void {
    const user: UserModel = this.userForm.value as UserModel;
    this.userAddEditService.createUser(user)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
        },
        (msg) => {
          this.notificationService.showError(msg);
        }
      );
  }


}
