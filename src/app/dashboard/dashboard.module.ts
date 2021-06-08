import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutComponent} from './components/shared/layout/layout.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {CoreModule} from '@core/core.module';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {SidebarComponent} from './components/shared/sidebar/sidebar/sidebar.component';
import { UserAddEditComponent } from './components/user/user-add-edit/user-add-edit.component';
import { PermissionListComponent } from './components/permission/permission-list/permission-list.component';
import { RoleListComponent } from './components/role/role-list/role-list.component';
import { RoleAddEditComponent } from './components/role/role-add-edit/role-add-edit.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandAddEditComponent } from './components/brand/brand-add-edit/brand-add-edit.component';
import {CategoryListComponent} from './components/category/category-list/category-list.component';
import {CategoryAddEditComponent} from './components/category/category-add-edit/category-add-edit.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductAddEditComponent} from './components/product/product-add-edit/product-add-edit.component';
import { HomeComponent } from './components/home/home.component';
import { PermissionTableComponent } from './components/permission/permission-table/permission-table.component';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { BrandTableComponent } from './components/brand/brand-table/brand-table.component';
import { CategoryTableComponent } from './components/category/category-table/category-table.component';
import { RoleTableComponent } from './components/role/role-table/role-table.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    // User
    UserListComponent,
    UserAddEditComponent,
    // Permission
    PermissionListComponent,
    PermissionTableComponent,
    // Role
    RoleListComponent,
    // Brand
    RoleAddEditComponent,
    BrandListComponent,
    // Category
    BrandAddEditComponent,
    CategoryListComponent,
    // Product
    CategoryAddEditComponent,
    ProductListComponent,
    ProductAddEditComponent,
    HomeComponent,
    ProductTableComponent,
    BrandTableComponent,
    CategoryTableComponent,
    RoleTableComponent,
    UserTableComponent
  ],
  imports: [
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule {
}
