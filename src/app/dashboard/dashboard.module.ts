import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {HeaderComponent} from './access/shared/header/header.component';
import {CoreModule} from '@core/core.module';
import {UserListComponent} from './access/components/user/user-list/user-list.component';
import {SidebarComponent} from './access/shared/sidebar/sidebar/sidebar.component';
import { UserAddEditComponent } from './access/components/user/user-add-edit/user-add-edit.component';
import { PermissionListComponent } from './access/components/permission/permission-list/permission-list.component';
import { RoleListComponent } from './access/components/role/role-list/role-list.component';
import { RoleAddEditComponent } from './access/components/role/role-add-edit/role-add-edit.component';
import { BrandListComponent } from './access/components/brand/brand-list/brand-list.component';
import { BrandAddEditComponent } from './access/components/brand/brand-add-edit/brand-add-edit.component';
import {CategoryListComponent} from './access/components/category/category-list/category-list.component';
import {CategoryAddEditComponent} from './access/components/category/category-add-edit/category-add-edit.component';
import {ProductListComponent} from './access/components/product/product-list/product-list.component';
import {ProductAddEditComponent} from './access/components/product/product-add-edit/product-add-edit.component';
import { HomeComponent } from './access/shared/home/home.component';
import { PermissionTableComponent } from './access/components/permission/permission-table/permission-table.component';
import { ProductTableComponent } from './access/components/product/product-table/product-table.component';
import { BrandTableComponent } from './access/components/brand/brand-table/brand-table.component';
import { CategoryTableComponent } from './access/components/category/category-table/category-table.component';
import { RoleTableComponent } from './access/components/role/role-table/role-table.component';
import { UserTableComponent } from './access/components/user/user-table/user-table.component';

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
