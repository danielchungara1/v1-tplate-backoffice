import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecurityComponent} from './view/components/security/security.component';
import {LoginComponent} from './view/components/login/login.component';
import {ResetPasswordComponent} from './view/components/reset-password/reset-password.component';


const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
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
