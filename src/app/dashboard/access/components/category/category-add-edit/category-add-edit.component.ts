import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategoryAddEditService} from '../../../../business/services/category/category-add-edit.service';
import {CategorySearchService} from '../../../../business/services/category/category-search.service';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss']
})
export class CategoryAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  titleLabel: string;
  buttonLabel: string;
  model: CategoryModel;
  modelId: number;
  handlerSubmit: any;
  parents: CategoryModel[];
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: CategoryAddEditService,
              private searchService: CategorySearchService,
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
      // Fetching model
      this.searchService.getOne(this.modelId).subscribe(
        model => {
          if (model.parentId) {
            this.searchService.getOne(model.parentId).subscribe(
              parent => {
                model.parent = parent;
                this.form.patchValue(model);
              },
              msg => this.notificationService.showError(msg)
            );
          } else {
            this.form.patchValue(model);
          }
        },
        msg => this.notificationService.showError(msg)
      );
    }

    this.loadParents();

  }

  create(): void {
    this.submitting = true;
    this.model = this.form.value as CategoryModel;
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
    this.model = this.form.value as CategoryModel;
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
      this.titleLabel = 'Edit Category';
      this.buttonLabel = 'Update';
    } else {
      this.titleLabel = 'Create Category';
      this.buttonLabel = 'Create';
    }
  }

  private initializeInputs(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
      parent: [null]
    });
  }

  private initializeSubmit(): void {
    if (this.formIsEdit) {
      this.handlerSubmit = () => this.update();
    } else {
      this.handlerSubmit = () => this.create();
    }
  }

  private loadParents(): void {
    this.searchService.getAll().subscribe(
      allCategories => this.parents = allCategories,
      msg => this.notificationService.showError(msg)
    );
  }
}
