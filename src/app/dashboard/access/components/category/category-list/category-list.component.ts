import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {CategoryModel} from '../../../models/CategoryModel';
import {CategoryListService} from '../../../../business/services/category/category-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  models: CategoryModel[];

  constructor(private service: CategoryListService,
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


  onDeleted($event: CategoryModel): void {
    this.models =
      this.models.filter(model => model.id !== $event.id);
  }

}
