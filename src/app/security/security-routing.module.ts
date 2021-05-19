import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {LoginComponent} from './access/components/login/login.component';
import {ResetPasswordComponent} from './access/components/reset-password/reset-password.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: '**', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
