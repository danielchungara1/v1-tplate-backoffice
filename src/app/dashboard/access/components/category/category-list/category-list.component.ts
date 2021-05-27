import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {RoleModel} from '../../../models/RoleModel';
import {RoleListService} from '../../../../business/services/role/role-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: RoleModel[];

  constructor(private roleListService: RoleListService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadRoles();
  }

  public loadRoles(): void {
    this.roleListService.getRoles().subscribe(
      roles => this.categories = roles,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: RoleModel): void {
    this.categories =
      this.categories.filter(role => role.id !== $event.id);
  }

}
