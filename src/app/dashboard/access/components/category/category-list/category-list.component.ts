import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.searchAndEmit('', 0);
  }


}
