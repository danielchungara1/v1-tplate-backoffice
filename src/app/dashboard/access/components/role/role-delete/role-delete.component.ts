import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../../models/UserModel';
import {UserDeleteService} from '../../../../business/services/user/user-delete.service';
import {NotificationService} from '@shared/notifications/notification.service';
import {ConfirmationService} from 'primeng/api';
import {RoleModel} from '../../../models/RoleModel';
import {RoleDeleteService} from '../../../../business/services/role/role-delete.service';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.scss']
})
export class RoleDeleteComponent implements OnInit {

  @Input()
  role: RoleModel;

  @Output()
  deleted: EventEmitter<RoleModel> = new EventEmitter();

  constructor(private roleDeleteService: RoleDeleteService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    // For testing use route: http://localhost:4200/dashboard/delete-role
    // The role must be on DB.
    // this.role = {
    //   id: 4,
    //   name: 'TESTER+100',
    //   description: 'TESTING OPERATOR',
    //   permissions: []
    // };

    // Input validation
    if (!this.role) {
      throw new Error(`Role model is required for ${this.constructor.name}.`);
    }
    if (!this.role.id) {
      throw new Error(`Role ID is required for ${this.constructor.name}.`);
    }
  }

  deleteRole(): void {
    this.confirmationService.confirm({
      message: `Delete role ${this.role.name} (ID ${this.role.id})?`,
      accept: () => {
        this.roleDeleteService.deleteRole(this.role.id)
          .subscribe(
            message => {
              this.notificationService.showSuccess(message);
              this.deleted.emit(this.role);
            },
            error => this.notificationService.showError(error),
            () => this.confirmationService.close()
          );
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: this.role.id.toString()
    });
  }

}
