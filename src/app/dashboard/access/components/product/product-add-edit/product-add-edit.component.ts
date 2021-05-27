import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../../models/ProductModel';
import {ProductAddEditService} from '../../../../business/services/product/product-add-edit.service';
import {ProductSearchService} from '../../../../business/services/product/product-search.service';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  titleLabel: string;
  buttonLabel: string;
  model: ProductModel;
  modelId: number;
  handlerSubmit: any;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: ProductAddEditService,
              private searchService: ProductSearchService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // Initialize form depend on create or update
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.modelId = Number(id);
      this.formIsEdit = true;
    }
    this.initializeLabels();
    this.initializeInputs();
    this.initializeSubmit();

    if (this.formIsEdit) {
      // Fetching
      this.searchService.getOne(this.modelId).subscribe(
        data => this.form.patchValue(data),
        msg => this.notificationService.showError(msg)
      );
    }

  }

  create(): void {
    this.model = this.form.value as ProductModel;
    this.service.create(this.model)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
        },
        (msg) => {
          this.notificationService.showError(msg);
        }
      );
  }

  update(): void {
    this.model = this.form.value as ProductModel;
    this.service.update(this.model, this.modelId)
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
    return this.form.controls;
  }


  private initializeLabels(): void {
    if (this.formIsEdit) {
      this.titleLabel = 'Edit Product';
      this.buttonLabel = 'Update';
    } else {
      this.titleLabel = 'Create Product';
      this.buttonLabel = 'Create';
    }
  }

  private initializeInputs(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  private initializeSubmit(): void {
    if (this.formIsEdit) {
      this.handlerSubmit = () => this.update();
    } else {
      this.handlerSubmit = () => this.create();
    }
  }
}
