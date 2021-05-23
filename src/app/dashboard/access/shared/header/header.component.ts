import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {UserModel} from '../../models/UserModel';
import {Router} from '@angular/router';
import {NotificationService} from '@shared/notifications/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserModel;

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.user = this.localStorageService.getUser();
  }

  logout(): void{
    this.localStorageService.clear();
    this.router.navigate(['security/login']);
    this.notificationService.showSuccess('User logged out.');
  }
}
