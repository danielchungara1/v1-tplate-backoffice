import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Tplate Software',
        icon: 'fas fa-home',
        routerLink: ['users']
      },
      {
        label: 'List Users',
        icon: 'fas fa-users',
        routerLink: ['users']
      },
      {
        label: 'Create User',
        icon: 'fas fa-user-plus',
        routerLink: ['create-user']
      }
    ];
  }

}
