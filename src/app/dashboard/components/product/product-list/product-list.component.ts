import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(public searchService: ProductService) {
  }

  ngOnInit(): void {
    this.searchService.searchAndEmit('', 0);
  }

}
