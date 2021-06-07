import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '@core/crud/crud.service';
import {ResultSearch} from '@core/abstractClases/ResultSearch';
import {UserModel} from '../../../models/UserModel';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input()
  crudService: CrudService<UserModel>;

  users: UserModel[];

  constructor() { }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe((resultSearch: ResultSearch<UserModel>) => {
      this.users = resultSearch.page.content;
    });
  }

}
