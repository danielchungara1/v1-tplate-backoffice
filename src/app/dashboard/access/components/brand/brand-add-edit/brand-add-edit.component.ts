import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {BrandModel} from '../../../models/BrandModel';
import {BrandService} from '../../../../services/brand/brand.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-brand-add-edit',
  templateUrl: './brand-add-edit.component.html',
  styleUrls: ['./brand-add-edit.component.scss']
})
export class BrandAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: BrandService,
              private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.formIsEdit = true; // Dynamic form (change of labels/callbacks)
    }
  }

  ngOnInit(): void {

    this.createForm();

    // Only for Edit
    if (this.formIsEdit) {
      this.loadModel();
    }

  }

  submit(): void {

    this.submitting = true;
    let callback: Observable<string>;

    if (this.formIsEdit) {
      callback = this.service.update(this.form.value as BrandModel, this.getModelId());
    } else {
      callback = this.service.create(this.form.value as BrandModel);
    }

    callback
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
          this.submitting = false;
        },
        (msg) => {
          this.notificationService.showError(msg);
          this.submitting = false;
        }
      )
    ;
  }

  get getFormControls(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title: ['', [Validators.required]]
    });
  }

  private loadModel(): void {
    // Fill form
    this.service.getOne(this.getModelId()).subscribe(
      data => this.form.patchValue(data),
      msg => this.notificationService.showError(msg)
    );
  }

  private getModelId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
