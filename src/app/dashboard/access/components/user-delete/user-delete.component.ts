import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  userId: number;

  constructor() {
  }

  ngOnInit(): void {
    this.userId = 7;
  }

  deleteUser(): void {
    console.log(`Deleting user with id ${this.userId}`);
  }
}
