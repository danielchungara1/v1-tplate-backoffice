import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {RoleModel} from '../../models/RoleModel';
import {RoleListService} from '../../../business/services/role-list.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles: RoleModel[];

  constructor(private roleListService: RoleListService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadRoles();
  }

  public loadRoles(): void {
    this.roleListService.getRoles().subscribe(
      roles => this.roles = roles,
      error => this.notificationService.showError(error)
    );
  }

}
