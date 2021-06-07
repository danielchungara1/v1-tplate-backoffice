import {Component, Input, OnInit} from '@angular/core';
import {ResultSearch} from '@core/abstractClases/ResultSearch';
import {PermissionModel} from '../../../models/PermissionModel';
import {CrudService} from '@core/crud/crud.service';

@Component({
  selector: 'app-permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.scss']
})
export class PermissionTableComponent implements OnInit {

  @Input()
  crudService: CrudService<PermissionModel>;

  permissions: PermissionModel[];

  constructor() { }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe((resultSearch: ResultSearch<PermissionModel>) => {
      this.permissions = resultSearch.page.content;
    });
  }

}
