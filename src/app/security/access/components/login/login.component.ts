import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../business/services/login.service';
import {LoginModel} from '../../models/LoginModel';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private service: LoginService,
              private notificationService: NotificationService,
              public formBuilder: FormBuilder,
              private router: Router) {
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
          this.router.navigate(['/dashboard']);

        },
        (msg) => {
          this.notificationService.showError(msg);
        }
      );
  }

  get getFormControls(): { [p: string]: AbstractControl }  {
    return this.loginForm.controls;
  }

}
