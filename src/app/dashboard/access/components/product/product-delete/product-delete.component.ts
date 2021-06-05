import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {ConfirmationService} from 'primeng/api';
import {ProductModel} from '../../../models/ProductModel';
import {ProductService} from '../../../../services/product/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  @Input()
  model: ProductModel;

  @Output()
  deleted: EventEmitter<ProductModel> = new EventEmitter();

  constructor(private service: ProductService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    // Input validation
    if (!this.model) {
      throw new Error(`Product model is required for ${this.constructor.name}.`);
    }
    if (!this.model.id) {
      throw new Error(`Product ID is required for ${this.constructor.name}.`);
    }
  }

  delete(): void {
    this.confirmationService.confirm({
      message: `Delete product ${this.model.name} (ID ${this.model.id})?`,
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
