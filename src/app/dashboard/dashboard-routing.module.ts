import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {UserListComponent} from './access/components/user-list/user-list.component';
import {UserAddEditComponent} from './access/components/user-add-edit/user-add-edit.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'users', component: UserListComponent},
    {path: 'create-user', component: UserAddEditComponent},
    {path: '**', component: UserListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
