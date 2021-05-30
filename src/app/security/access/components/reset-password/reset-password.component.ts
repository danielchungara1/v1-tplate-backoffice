import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResetCodeService} from '../../../business/services/resetCode.service';
import {ResetPasswordModel} from '../../models/ResetPasswordModel';
import {MatVerticalStepper} from '@angular/material/stepper';
import {Router} from '@angular/router';
import {NotificationService} from '@shared/notifications/notification.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {

  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;

  resetPasswordModel: ResetPasswordModel;

  sendEmailForm: FormGroup;
  sendingCode = false;

  updatePasswordForm: FormGroup;
  updatingPassword = false;
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private resetCodeService: ResetCodeService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sendEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.updatePasswordForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.resetPasswordModel = {code: '', email: '', password: ''};
  }

  ngAfterViewInit(): void {
    this.stepper.selected.completed = false;
  }

  sendEmail(): void {
    this.sendingCode = true;
    this.resetPasswordModel = this.sendEmailForm.value as ResetPasswordModel;

    this.resetCodeService.sendResetCode(this.resetPasswordModel)
      .subscribe(
        msg => {
          this.notificationService.showSuccess(msg);
          this.sendingCode = false;
          this.completeStep();
        },
        msg => {
          this.notificationService.showError(msg);
          this.sendingCode = false;
        }
      );

  }

  updatePassword(): void {
    this.updatingPassword = true;

    // Todo: uncoupling dependencies
    const email = this.resetPasswordModel.email;
    this.resetPasswordModel = this.updatePasswordForm.value as ResetPasswordModel;
    this.resetPasswordModel.email = email;

    this.resetCodeService.updatePassword(this.resetPasswordModel)
      .subscribe(
        msg => {
          this.notificationService.showSuccess(msg);
          this.completeStep();
          this.updatingPassword = false;
          this.router.navigate(['security/login']);
        },
        msg => {
          this.notificationService.showError(msg);
          this.updatingPassword = false;
        }
      );
  }

  completeStep(): void {
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  get getSendEmailForm(): { [p: string]: AbstractControl } {
    return this.sendEmailForm.controls;
  }

  get getUpdatePasswordForm(): { [p: string]: AbstractControl } {
    return this.updatePasswordForm.controls;
  }
}
