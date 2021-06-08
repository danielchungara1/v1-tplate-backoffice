import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '@core/crud/crud.service';
import {ResultSearch} from '@core/abstract/ResultSearch';
import {RoleModel} from '../../../models/RoleModel';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleTableComponent implements OnInit {

  @Input()
  crudService: CrudService<RoleModel>;

  categories: RoleModel[];

  constructor() { }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe((resultSearch: ResultSearch<RoleModel>) => {
      this.categories = resultSearch.page.content;
    });
  }
}
