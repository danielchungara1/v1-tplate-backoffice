import {Component, Input, OnInit} from '@angular/core';
import {PermissionService} from '../../../services/permission/permission.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {

  constructor(public searchService: PermissionService) {
  }

  ngOnInit(): void {
    this.searchService.searchAndEmit('', 0);
  }

}
