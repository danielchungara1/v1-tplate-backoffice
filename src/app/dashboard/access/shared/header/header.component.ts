import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {UserModel} from '../../models/UserModel';
import {Router} from '@angular/router';
import {NotificationService} from '@shared/notifications/notification.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserModel;

  items: MenuItem[];

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.user = this.localStorageService.getUser();

    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['edit-user', this.user.id]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.logout()
      }
    ];
  }

  logout(): void {
    this.localStorageService.clear();
    this.router.navigate(['security/login']);
    this.notificationService.showSuccess('User logged out.');
  }
}
