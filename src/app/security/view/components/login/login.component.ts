import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../business/services/login.service';
import {UserModel} from '../../models/UserModel';
import {NotificationService} from '../../../business/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserModel;

  constructor(private service: LoginService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.model = {username: '', password: ''};
  }

  login(): void {
    this.service.login(this.model)
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
