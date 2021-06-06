import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategoryService} from '../../../../services/category/category.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss']
})
export class CategoryAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  submitting = false;

  categories: CategoryModel[];

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: CategoryService,
              private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.formIsEdit = true; // Dynamic form (change of labels/callbacks)
    }
  }

  ngOnInit(): void {

    this.createForm();

    if (this.formIsEdit) {
      this.loadModel();
    }

    this.loadCategories();

  }

  submit(): void {

    this.submitting = true;
    let callback: Observable<string>;

    if (this.formIsEdit) {
      callback = this.service.update(this.form.value as CategoryModel, this.getModelId());
    } else {
      callback = this.service.create(this.form.value as CategoryModel);
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

  private loadCategories(): void {
    this.service.getAll().subscribe(
      models => this.categories = models,
      msg => this.notificationService.showError(msg)
    );
  }

  private loadModel(): void {
    this.service.getOne(this.getModelId()).subscribe(
      model => {
        if (model.parentId) {
          this.service.getOne(model.parentId).subscribe(
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

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
      parent: [null]
    });
  }

  private getModelId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
