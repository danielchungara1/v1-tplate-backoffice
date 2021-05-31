import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../../models/ProductModel';
import {ProductAddEditService} from '../../../../business/services/product/product-add-edit.service';
import {ProductSearchService} from '../../../../business/services/product/product-search.service';
import {BrandSearchService} from '../../../../business/services/brand/brand-search.service';
import {BrandModel} from '../../../models/BrandModel';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategorySearchService} from '../../../../business/services/category/category-search.service';

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

  brands: BrandModel[];
  categories: CategoryModel[];
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: ProductAddEditService,
              private searchService: ProductSearchService,
              private brandSearchService: BrandSearchService,
              private categorySearchService: CategorySearchService,
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

    // Load selects
    this.loadBrands();
    this.loadCategories();

  }

  create(): void {
    this.submitting = true;
    this.model = this.form.value as ProductModel;
    this.service.create(this.model)
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

  update(): void {
    this.submitting = true;
    this.model = this.form.value as ProductModel;
    this.service.update(this.model, this.modelId)
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
      category: [null],
      brand: [null],
    });
  }

  private initializeSubmit(): void {
    if (this.formIsEdit) {
      this.handlerSubmit = () => this.update();
    } else {
      this.handlerSubmit = () => this.create();
    }
  }

  private loadBrands(): void {
    this.brandSearchService.getAll().subscribe(
      brands => this.brands = brands,
      msg => this.notificationService.showError(msg)
    );
  }

  private loadCategories(): void {
    this.categorySearchService.getAll().subscribe(
      categories => this.categories = categories,
      msg => this.notificationService.showError(msg)
    );
  }
}
