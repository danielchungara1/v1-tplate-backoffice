import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {Injectable} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';

@Injectable()
export class CanActivateDashboardGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.localStorageService.getUser()) {
      this.router.navigate(['security/login']);
      this.notificationService.showError('Invalid session, try to login.');
      return false;
    }
    return true;
  }
  
}
