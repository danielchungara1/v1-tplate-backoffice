import {Component, OnInit} from '@angular/core';
import {PermissionModel} from '../../models/PermissionModel';
import {PermissionListService} from '../../../business/services/permission-list.service';
import {NotificationService} from '@shared/notifications/notification.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {

  permissions: PermissionModel[];

  constructor(private permissionListService: PermissionListService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadPermissions();
  }

  public loadPermissions(): void {
    this.permissionListService.getPermissions().subscribe(
      permissions => this.permissions = permissions,
      error => this.notificationService.showError(error)
    );
  }

}
