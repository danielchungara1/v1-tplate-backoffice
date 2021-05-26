import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {UserListComponent} from './access/components/user-list/user-list.component';
import {UserAddEditComponent} from './access/components/user-add-edit/user-add-edit.component';
import {UserDeleteComponent} from './access/components/user-delete/user-delete.component';
import {PermissionListComponent} from './access/components/permission-list/permission-list.component';
import {RoleListComponent} from './access/components/role-list/role-list.component';
import {RoleAddEditComponent} from './access/components/role-add-edit/role-add-edit.component';
import {RoleDeleteComponent} from './access/components/role-delete/role-delete.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'users', component: UserListComponent},
    {path: 'create-user', component: UserAddEditComponent},
    {path: 'edit-user/:id', component: UserAddEditComponent},
    {path: 'delete-user', component: UserDeleteComponent},
    {path: 'permissions', component: PermissionListComponent},
    {path: 'roles', component: RoleListComponent},
    {path: 'create-role', component: RoleAddEditComponent},
    {path: 'edit-role/:id', component: RoleAddEditComponent},
    {path: 'delete-role', component: RoleDeleteComponent},
    {path: '**', component: UserListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
