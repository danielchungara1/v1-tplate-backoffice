import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '@core/crud/crud.service';
import {ResultSearch} from '@core/abstractClases/ResultSearch';
import {CategoryModel} from '../../../models/CategoryModel';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  @Input()
  crudService: CrudService<CategoryModel>;

  categories: CategoryModel[];

  additionalDeleteMessage = `The category and all its descendants categories will be deleted.` + '<br/>' +
    `In addition, the products that have some category of the hierarchy will be reset their category.`;

  constructor() { }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe((resultSearch: ResultSearch<CategoryModel>) => {
      this.categories = resultSearch.page.content;
    });
  }

}
