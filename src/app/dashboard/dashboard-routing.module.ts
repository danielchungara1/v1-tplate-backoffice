import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {UserListComponent} from './access/components/user/user-list/user-list.component';
import {UserAddEditComponent} from './access/components/user/user-add-edit/user-add-edit.component';
import {UserDeleteComponent} from './access/components/user/user-delete/user-delete.component';
import {PermissionListComponent} from './access/components/permission/permission-list/permission-list.component';
import {RoleListComponent} from './access/components/role/role-list/role-list.component';
import {RoleAddEditComponent} from './access/components/role/role-add-edit/role-add-edit.component';
import {RoleDeleteComponent} from './access/components/role/role-delete/role-delete.component';
import {BrandListComponent} from './access/components/brand/brand-list/brand-list.component';
import {BrandAddEditComponent} from './access/components/brand/brand-add-edit/brand-add-edit.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    // Users
    {path: 'users', component: UserListComponent},
    {path: 'create-user', component: UserAddEditComponent},
    {path: 'edit-user/:id', component: UserAddEditComponent},
    {path: 'delete-user', component: UserDeleteComponent},

    // Permissions
    {path: 'permissions', component: PermissionListComponent},

    // Roles
    {path: 'roles', component: RoleListComponent},
    {path: 'create-role', component: RoleAddEditComponent},
    {path: 'edit-role/:id', component: RoleAddEditComponent},
    {path: 'delete-role', component: RoleDeleteComponent},

    // Brands
    {path: 'brands', component: BrandListComponent},
    {path: 'create-brand', component: BrandAddEditComponent},
    {path: 'edit-brand/:id', component: BrandAddEditComponent},
    // {path: 'delete-role', component: RoleDeleteComponent},

    {path: '**', component: UserListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
