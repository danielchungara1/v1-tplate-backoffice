import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {SignUpModel} from '../../models/SignUpModel';
import {SignUpService} from '../../../business/services/signUp.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  model: SignUpModel;
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: SignUpService){
  }

  ngOnInit(): void {

    this.initializeInputs();

  }

  signUp(): void {
    this.submitting = true;
    const model: SignUpModel = this.form.value as SignUpModel;
    this.service.signUp(model)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
          this.submitting = false;
        },
        (msg) => {
          this.notificationService.showError(msg);
          this.submitting = false;
        }
      );
  }

  get getFormControls(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

  private initializeInputs(): void {
    this.form = this.formBuilder.group({
      // Credentials
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // Contact
      email: ['', [Validators.required, Validators.email]],
    });
  }

}
