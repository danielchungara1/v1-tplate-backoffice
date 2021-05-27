import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {ProductModel} from '../../../models/ProductModel';
import {CategoryListService} from '../../../../business/services/category/category-list.service';
import {ProductListService} from '../../../../business/services/product/product-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  models: ProductModel[];

  constructor(private service: ProductListService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadModels();
  }

  public loadModels(): void {
    this.service.getAll().subscribe(
      models => this.models = models,
      error => this.notificationService.showError(error)
    );
  }


  onDeleted($event: ProductModel): void {
    this.models = this.models.filter(model => model.id !== $event.id);
  }

}
