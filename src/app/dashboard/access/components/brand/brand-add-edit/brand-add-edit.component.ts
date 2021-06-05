import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {BrandModel} from '../../../models/BrandModel';
import {BrandService} from '../../../../business/services/brand/brand.service';

@Component({
  selector: 'app-brand-add-edit',
  templateUrl: './brand-add-edit.component.html',
  styleUrls: ['./brand-add-edit.component.scss']
})
export class BrandAddEditComponent implements OnInit {

  brandForm: FormGroup;
  formIsEdit = false;
  titleLabel: string;
  buttonLabel: string;
  brand: BrandModel;
  brandId: number;
  handlerSubmit: any;
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private brandService: BrandService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // Initialize form depend on create or update
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.brandId = Number(id);
      this.formIsEdit = true;
    }
    this.initializeLabels();
    this.initializeInputs();
    this.initializeSubmit();

    if (this.formIsEdit) {
      // Fetching brand
      this.brandService.getOne(this.brandId).subscribe(
        data => this.brandForm.patchValue(data),
        msg => this.notificationService.showError(msg)
      );
    }

  }

  createBrand(): void {
    this.submitting = true;
    const brand: BrandModel = this.brandForm.value as BrandModel;
    this.brandService.create(brand)
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

  updateBrand(): void {
    this.submitting = true;
    const model: BrandModel = this.brandForm.value as BrandModel;
    this.brandService.update(model, this.brandId)
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
    return this.brandForm.controls;
  }


  private initializeLabels(): void {
    if (this.formIsEdit) {
      this.titleLabel = 'Edit Brand';
      this.buttonLabel = 'Update';
    } else {
      this.titleLabel = 'Create Brand';
      this.buttonLabel = 'Create';
    }
  }

  private initializeInputs(): void {
    this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title: ['', [Validators.required]]
    });
  }

  private initializeSubmit(): void {
    if (this.formIsEdit) {
      this.handlerSubmit = () => this.updateBrand();
    } else {
      this.handlerSubmit = () => this.createBrand();
    }
  }

}
