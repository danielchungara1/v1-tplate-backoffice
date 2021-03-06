import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Tplate Software',
        icon: 'fas fa-home',
        routerLink: ['home']
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
      },
      {
        label: 'List Permissions',
        icon: 'fas fa-list-alt',
        routerLink: ['permissions']
      },
      {
        label: 'List Roles',
        icon: 'fas fa-list-alt',
        routerLink: ['roles']
      },
      {
        label: 'List Brands',
        icon: 'fas fa-list-alt',
        routerLink: ['brands']
      },
      {
        label: 'List Categories',
        icon: 'fas fa-list-alt',
        routerLink: ['categories']
      },
      {
        label: 'List Products',
        icon: 'fas fa-list-alt',
        routerLink: ['products']
      },
      {
        label: 'Create Role',
        icon: 'fas fa-plus-circle',
        routerLink: ['create-role']
      },

      {
        label: 'Create Brand',
        icon: 'fas fa-plus-circle',
        routerLink: ['create-brand']
      },

      {
        label: 'Create Category',
        icon: 'fas fa-plus-circle',
        routerLink: ['create-category']
      },

      {
        label: 'Create Product',
        icon: 'fas fa-plus-circle',
        routerLink: ['create-product']
      },

    ];
  }

}
