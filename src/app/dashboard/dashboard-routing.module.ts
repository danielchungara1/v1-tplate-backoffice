import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/shared/layout/layout.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {UserAddEditComponent} from './components/user/user-add-edit/user-add-edit.component';
import {PermissionListComponent} from './components/permission/permission-list/permission-list.component';
import {RoleListComponent} from './components/role/role-list/role-list.component';
import {RoleAddEditComponent} from './components/role/role-add-edit/role-add-edit.component';
import {BrandListComponent} from './components/brand/brand-list/brand-list.component';
import {BrandAddEditComponent} from './components/brand/brand-add-edit/brand-add-edit.component';
import {CategoryListComponent} from './components/category/category-list/category-list.component';
import {CategoryAddEditComponent} from './components/category/category-add-edit/category-add-edit.component';
import {ProductAddEditComponent} from './components/product/product-add-edit/product-add-edit.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    // Users
    {path: 'users', component: UserListComponent},
    {path: 'create-user', component: UserAddEditComponent},
    {path: 'edit-user/:id', component: UserAddEditComponent},

    // Permissions
    {path: 'permissions', component: PermissionListComponent},

    // Roles
    {path: 'roles', component: RoleListComponent},
    {path: 'create-role', component: RoleAddEditComponent},
    {path: 'edit-role/:id', component: RoleAddEditComponent},

    // Brands
    {path: 'brands', component: BrandListComponent},
    {path: 'create-brand', component: BrandAddEditComponent},
    {path: 'edit-brand/:id', component: BrandAddEditComponent},

    // Categories
    {path: 'categories', component: CategoryListComponent},
    {path: 'create-category', component: CategoryAddEditComponent},
    {path: 'edit-category/:id', component: CategoryAddEditComponent},

    // Products
    {path: 'products', component: ProductListComponent},
    {path: 'create-product', component: ProductAddEditComponent},
    {path: 'edit-product/:id', component: ProductAddEditComponent},

    {path: '**', component: HomeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
