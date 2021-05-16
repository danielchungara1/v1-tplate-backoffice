import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResetCodeService} from '../../../business/services/resetCode.service';
import {ResetCodeModel} from '../../models/ResetCodeModel';
import {NotificationService} from '../../../business/services/notification.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetCodeForm: FormGroup;
  sending = false;

  constructor(public formBuilder: FormBuilder,
              private resetCodeService: ResetCodeService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.resetCodeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]
      ]
    });
  }

  sendResetCode(): void {
    this.sending = true;
    const resetCodeModel: ResetCodeModel = this.resetCodeForm.value as ResetCodeModel;
    this.resetCodeService.sendResetCode(resetCodeModel)
      .subscribe(
        msg => {
          this.notificationService.showSuccess(msg);
          this.sending = false;
        },
        msg => {
          this.notificationService.showError(msg);
          this.sending = false;
        }
      );
  }

  get getControl(): { [p: string]: AbstractControl } {
    return this.resetCodeForm.controls;
  }
}
