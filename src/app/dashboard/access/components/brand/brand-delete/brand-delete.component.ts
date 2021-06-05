import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {ConfirmationService} from 'primeng/api';
import {BrandModel} from '../../../models/BrandModel';
import {BrandService} from '../../../../business/services/brand/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.scss']
})
export class BrandDeleteComponent implements OnInit {

  @Input()
  model: BrandModel;

  @Output()
  deleted: EventEmitter<BrandModel> = new EventEmitter();

  constructor(private brandDeleteService: BrandService,
              private notificationService: NotificationService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    // Input validation
    if (!this.model) {
      throw new Error(`Brand model is required for ${this.constructor.name}.`);
    }
    if (!this.model.id) {
      throw new Error(`Brand ID is required for ${this.constructor.name}.`);
    }
  }

  delete(): void {
    this.confirmationService.confirm({
      message: `Delete brand ${this.model.name} (ID ${this.model.id})?` + '<br/></br>'  +
               `All products that have this brand will be reset it.`,
      accept: () => {
        this.brandDeleteService.delete(this.model.id)
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
