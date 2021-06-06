import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleModel} from '../../../models/RoleModel';
import {NotificationService} from '@shared/notifications/notification.service';
import {RoleService} from '../../../../services/role/role.service';
import {ActivatedRoute} from '@angular/router';
import {PermissionModel} from '../../../models/PermissionModel';
import {PermissionService} from '../../../../services/permission/permission.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-role-add-edit',
  templateUrl: './role-add-edit.component.html',
  styleUrls: ['./role-add-edit.component.scss']
})
export class RoleAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  submitting = false;

  permissions: PermissionModel[];

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private service: RoleService,
              private permissionService: PermissionService,
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

    this.loadPermissions();

  }

  submit(): void {
    this.submitting = true;
    let callback: Observable<string>;

    if (this.formIsEdit) {
      callback = this.service.update(this.form.value as RoleModel, this.getModelId());
    } else {
      callback = this.service.create(this.form.value as RoleModel);
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
      permissions: [null, [Validators.required]]
    });
  }

  private loadModel(): void {
    this.service.getOne(this.getModelId()).subscribe(
      data => this.form.patchValue(data),
      msg => this.notificationService.showError(msg)
    );
  }

  private loadPermissions(): void {
    this.permissionService.getAll().subscribe(
      data => this.permissions = data,
      msg => this.notificationService.showError(msg)
    );
  }

  private getModelId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
