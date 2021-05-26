import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@shared/notifications/notification.service';
import {BrandModel} from '../../../models/BrandModel';
import {BrandListService} from '../../../../business/services/brand/brand-list.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: BrandModel[];

  constructor(private brandListService: BrandListService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadBrands();
  }

  public loadBrands(): void {
    this.brandListService.getBrands().subscribe(
      brands => this.brands = brands,
      error => this.notificationService.showError(error)
    );
  }


  // onDeleted($event: RoleModel): void {
  //   this.brands =
  //     this.brands.filter(role => role.id !== $event.id);
  // }
}
