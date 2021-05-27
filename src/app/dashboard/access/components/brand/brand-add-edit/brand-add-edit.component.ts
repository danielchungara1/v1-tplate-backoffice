import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {BrandModel} from '../../../models/BrandModel';
import {BrandAddEditService} from '../../../../business/services/brand/brand-add-edit.service';
import {BrandSearchService} from '../../../../business/services/brand/brand-search.service';

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

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private brandAddEditService: BrandAddEditService,
              private permissionSearchService: BrandSearchService,
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
      this.permissionSearchService.getBrand(this.brandId).subscribe(
        data => this.brandForm.patchValue(data),
        msg => this.notificationService.showError(msg)
      );
    }

  }

  createBrand(): void {
    const brand: BrandModel = this.brandForm.value as BrandModel;
    this.brandAddEditService.createBrand(brand)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
        },
        (msg) => {
          this.notificationService.showError(msg);
        }
      );
  }

  updateBrand(): void {
    const model: BrandModel = this.brandForm.value as BrandModel;
    this.brandAddEditService.updateBrand(model, this.brandId)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
        },
        (msg) => {
          this.notificationService.showError(msg);
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