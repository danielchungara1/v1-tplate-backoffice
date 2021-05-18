import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './view/components/dashboard/dashboard.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  // children: [
  //   {path: 'users', component: UserListComponent},
  //   {path: '**', component: UserListComponent}
  // ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
