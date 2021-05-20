import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {UserListService} from '../../../business/services/user-list.service';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: UserModel[];

  constructor(private userListService: UserListService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(): void {
      this.userListService.getUsers().subscribe(
        value => console.log(value),
        error => console.log(error)
      );
  }

}
