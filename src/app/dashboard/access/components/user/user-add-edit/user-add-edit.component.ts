import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {UserModel} from '../../../models/UserModel';
import {RoleService} from '../../../../services/role/role.service';
import {RoleModel} from '../../../models/RoleModel';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

  form: FormGroup;
  formIsEdit = false;
  submitting = false;

  roles: RoleModel[];

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private userService: UserService,
              private roleService: RoleService,
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

    this.loadRoles();

  }

  submit(): void {
    this.submitting = true;
    let callback: Observable<string>;

    if (this.formIsEdit) {
      callback = this.userService.update(this.form.value as UserModel, this.getModelId());
    } else {
      callback = this.userService.create(this.form.value as UserModel);
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
    console.log(this.formIsEdit);
    this.form = this.formBuilder.group({
      // Credentials
      username: ['', [Validators.required]],
      password: ['', this.formIsEdit === true ? [] : [Validators.required]],
      // Contact
      name: [''],
      lastname: [''],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      // Role
      role: [null, [Validators.required]]
    });
  }

  private loadModel(): void {
    this.userService.getOne(this.getModelId()).subscribe(
      data => this.form.patchValue(data),
      msg => this.notificationService.showError(msg)
    );
  }

  private loadRoles(): void {
    this.roleService.getAll().subscribe(
      data => this.roles = data,
      msg => this.notificationService.showError(msg)
    );
  }

  private getModelId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
