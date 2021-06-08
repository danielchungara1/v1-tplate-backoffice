import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../services/role/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  constructor(public roleService: RoleService) {
  }

  ngOnInit(): void {
    this.roleService.searchAndEmit('', 0);
  }

}
