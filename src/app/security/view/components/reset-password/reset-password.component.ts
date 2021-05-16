import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResetCodeService} from '../../../business/services/resetCode.service';
import {ResetPasswordModel} from '../../models/ResetPasswordModel';
import {NotificationService} from '../../../business/services/notification.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordModel: ResetPasswordModel;

  sendEmailForm: FormGroup;
  sendingCode = false;

  updatePasswordForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              private resetCodeService: ResetCodeService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.sendEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.updatePasswordForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  sendEmail(): void {
    this.sendingCode = true;
    this.resetPasswordModel = this.sendEmailForm.value as ResetPasswordModel;

    this.resetCodeService.sendResetCode(this.resetPasswordModel)
      .subscribe(
        msg => {
          this.notificationService.showSuccess(msg);
          this.sendingCode = false;
        },
        msg => {
          this.notificationService.showError(msg);
          this.sendingCode = false;
        }
      );
  }

  updatePassword(): void {
    // Todo: uncoupling dependencies
    const email = this.resetPasswordModel.email;
    this.resetPasswordModel = this.updatePasswordForm.value as ResetPasswordModel;
    this.resetPasswordModel.email = email;

    this.resetCodeService.updatePassword(this.resetPasswordModel)
      .subscribe(
        msg => {
          this.notificationService.showSuccess(msg);
        },
        msg => {
          this.notificationService.showError(msg);
        }
      );
  }

  get getSendEmailForm(): { [p: string]: AbstractControl } {
    return this.sendEmailForm.controls;
  }

  get getUpdatePasswordForm(): { [p: string]: AbstractControl } {
    return this.updatePasswordForm.controls;
  }
}
