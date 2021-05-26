import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '@shared/notifications/notification.service';
import {ActivatedRoute} from '@angular/router';
import {BrandModel} from '../../../models/BrandModel';
import {BrandAddEditService} from '../../../../business/services/brand/brand-add-edit.service';

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
  // roleId: number;
  handlerSubmit: any;

  constructor(public formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private brandAddEditService: BrandAddEditService,
              // private permissionSearchService: BrandSearchService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // Initialize form depend on create or update
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // if (id) {
    //   this.roleId = Number(id);
    //   this.formIsEdit = true;
    // }
    this.initializeLabels();
    this.initializeInputs();
    this.initializeSubmit();

    // if (this.formIsEdit) {
    //   // Fetching role
    //   this.permissionSearchService.getRole(this.roleId).subscribe(
    //     data => this.brandForm.patchValue(data),
    //     msg => this.notificationService.showError(msg)
    //   );
    // }

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

  // updateRole(): void {
  //   const role: RoleModel = this.brandForm.value as RoleModel;
  //   this.brandAddEditService.updateRole(role, this.roleId)
  //     .subscribe(
  //       (msg) => {
  //         this.notificationService.showSuccess(msg);
  //       },
  //       (msg) => {
  //         this.notificationService.showError(msg);
  //       }
  //     );
  // }

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
      // this.handlerSubmit = () => this.updateRole();
    } else {
      this.handlerSubmit = () => this.createBrand();
    }
  }

}
