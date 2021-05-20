import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {UserListComponent} from './access/components/user-list/user-list.component';
import {AddEditUserComponent} from './access/components/add-edit-user/add-edit-user.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'users', component: UserListComponent},
    {path: 'create-user', component: AddEditUserComponent},
    {path: '**', component: UserListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
