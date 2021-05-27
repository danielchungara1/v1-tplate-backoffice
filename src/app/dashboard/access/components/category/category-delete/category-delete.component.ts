import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {ConfirmationService} from 'primeng/api';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategoryDeleteService} from '../../../../business/services/category/category-delete.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  @Input()
  model: CategoryModel;

  @Output()
  deleted: EventEmitter<CategoryModel> = new EventEmitter();

  constructor(private service: CategoryDeleteService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    // Input validation
    if (!this.model) {
      throw new Error(`Category model is required for ${this.constructor.name}.`);
    }
    if (!this.model.id) {
      throw new Error(`Category ID is required for ${this.constructor.name}.`);
    }
  }

  delete(): void {
    this.confirmationService.confirm({
      message: `Delete category ${this.model.name} (ID ${this.model.id})?`,
      accept: () => {
        this.service.delete(this.model.id)
          .subscribe(
            message => {
              this.notificationService.showSuccess(message);
              this.deleted.emit(this.model);
            },
            error => this.notificationService.showError(error),
            () => this.confirmationService.close()
          );
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: this.model.id.toString()
    });
  }

}
