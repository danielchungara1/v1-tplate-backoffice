import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../../models/ProductModel';
import {ProductService} from '../../../services/product/product.service';
import {BrandService} from '../../../services/brand/brand.service';
import {BrandModel} from '../../../models/BrandModel';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategoryService} from '../../../services/category/category.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  submitting = false;

  brands: BrandModel[];
  categories: CategoryModel[];

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: ProductService,
              private brandSearchService: BrandService,
              private categorySearchService: CategoryService,
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

    // Load selects
    this.loadBrands();
    this.loadCategories();

  }

  submit(): void {
    this.submitting = true;
    let callback: Observable<string>;

    if (this.formIsEdit) {
      callback = this.service.update(this.form.value as ProductModel, this.getModelId());
    } else {
      callback = this.service.create(this.form.value as ProductModel);
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

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
      category: [null],
      brand: [null],
    });
  }

  private loadModel(): void {
    this.service.getOne(this.getModelId()).subscribe(
      model => this.form.patchValue(model),
      msg => this.notificationService.showError(msg)
    );
  }

  private getModelId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
