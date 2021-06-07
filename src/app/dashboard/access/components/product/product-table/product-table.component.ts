import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '@core/crud/crud.service';
import {ProductModel} from '../../../models/ProductModel';
import {ResultSearch} from '@core/abstractClases/ResultSearch';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Input()
  crudService: CrudService<ProductModel>;

  model: ProductModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe((resultSearch: ResultSearch<ProductModel>) => {
      this.model = resultSearch.page.content;
    });
  }

}
