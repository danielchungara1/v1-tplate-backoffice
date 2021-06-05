import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoleModel} from '../../../models/RoleModel';
import {NotificationService} from '@shared/notifications/notification.service';
import {RoleSearchService} from '../../../../business/services/role/role-search.service';
import {ActivatedRoute} from '@angular/router';
import {PermissionModel} from '../../../models/PermissionModel';
import {RoleAddEditService} from '../../../../business/services/role/role-add-edit.service';
import {PermissionSearchService} from '../../../../business/services/permission/permission-search.service';

@Component({
  selector: 'app-role-add-edit',
  templateUrl: './role-add-edit.component.html',
  styleUrls: ['./role-add-edit.component.scss']
})
export class RoleAddEditComponent implements OnInit {

  roleForm: FormGroup;
  formIsEdit = false;
  titleLabel: string;
  buttonLabel: string;
  role: RoleModel;
  permissionsAll: PermissionModel[];
  roleId: number;
  handlerSubmit: any;
  submitting = false;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private roleAddEditService: RoleAddEditService,
              private roleSearchService: RoleSearchService,
              private permissionSearchService: PermissionSearchService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // Initialize form depend on create or update
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.roleId = Number(id);
      this.formIsEdit = true;
    }
    this.initializeLabels();
    this.initializeInputs();
    this.initializeSubmit();

    if (this.formIsEdit) {
      // Fetching role
      this.roleSearchService.getOne(this.roleId).subscribe(
        data => this.roleForm.patchValue(data),
        msg => this.notificationService.showError(msg)
      );
    }

    // Fetching permissions
    this.permissionSearchService.getAll().subscribe(
      data => this.permissionsAll = data,
      msg => this.notificationService.showError(msg)
    );


  }

  createRole(): void {
    this.submitting = true;
    const role: RoleModel = this.roleForm.value as RoleModel;
    this.roleAddEditService.createRole(role)
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

  updateRole(): void {
    this.submitting = true;
    const role: RoleModel = this.roleForm.value as RoleModel;
    this.roleAddEditService.updateRole(role, this.roleId)
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
    return this.roleForm.controls;
  }


  private initializeLabels(): void {
    if (this.formIsEdit) {
      this.titleLabel = 'Edit Role';
      this.buttonLabel = 'Update';
    } else {
      this.titleLabel = 'Create Role';
      this.buttonLabel = 'Create';
    }
  }

  private initializeInputs(): void {
    this.roleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      permissions: [null, [Validators.required]]
    });
  }

  private initializeSubmit(): void {
    if (this.formIsEdit) {
      this.handlerSubmit = () => this.updateRole();
    } else {
      this.handlerSubmit = () => this.createRole();
    }
  }
}
