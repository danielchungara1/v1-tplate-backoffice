import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../business/services/login.service';
import {LoginModel} from '../../models/LoginModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private service: LoginService,
              private notificationService: NotificationService,
              public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  login(): void {
    const model: LoginModel = this.loginForm.value as LoginModel;
    this.service.login(model)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
        },
        (msg) => {
          this.notificationService.showError(msg);
        }
      );
  }

  get getControl(): any {
    return this.loginForm.controls;
  }

}
