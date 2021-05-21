import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {UserModel} from '../../models/UserModel';
import {UserAddEditService} from '../../../business/services/user-add-edit.service';
import {RoleListService} from '../../../business/services/role-list.service';
import {RoleModel} from '../../models/RoleModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {

  userForm: FormGroup;
  formIsEdit = false;
  titleLabel: string;
  buttonLabel: string;
  passwordLabel: string;
  user: UserModel;
  roles: RoleModel[];
  userId: number;
  handlerSubmit: any;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private userAddEditService: UserAddEditService,
              private roleListService: RoleListService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // Initialize form depend on create or update
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.userId = Number(id);
      this.formIsEdit = true;
    }
    this.initializeLabels();
    this.initializeInputs();
    this.initializeSubmit();

    if (this.formIsEdit) {
      // Fetching user
      this.userAddEditService.getUser(this.userId).subscribe(
        data => this.userForm.patchValue(data),
        msg => this.notificationService.showError(msg)
      );
    }

    // Fetching roles
    this.roleListService.getRoles().subscribe(
      data => this.roles = data,
      msg => this.notificationService.showError(msg)
    );


  }

  createUser(): void {
    const user: UserModel = this.userForm.value as UserModel;
    this.userAddEditService.createUser(user)
      .subscribe(
        (msg) => {
          this.notificationService.showSuccess(msg);
        },
        (msg) => {
          this.notificationService.showError(msg);
        }
      );
  }

  updateUser(): void {
    const user: UserModel = this.userForm.value as UserModel;
    this.userAddEditService.updateUser(user, this.userId)
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
    return this.userForm.controls;
  }


  private initializeLabels(): void {
    if (this.formIsEdit) {
      this.titleLabel = 'EDIT USER';
      this.buttonLabel = 'Update';
      this.passwordLabel = 'Password';
    } else {
      this.titleLabel = 'CREATE USER';
      this.buttonLabel = 'Create';
      this.passwordLabel = 'Password *';
    }
  }

  private initializeInputs(): void {
    this.userForm = this.formBuilder.group({
      // Credentials
      username: ['', [Validators.required]],
      password: ['', this.formIsEdit ? [] : [Validators.required]],
      // Contact
      name: [''],
      lastname: [''],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      // Role
      role: [null, [Validators.required]]
    });
  }

  private initializeSubmit(): void {
    if (this.formIsEdit) {
      this.handlerSubmit = () => this.updateUser();
    } else {
      this.handlerSubmit = () => this.createUser();
    }
  }
}
