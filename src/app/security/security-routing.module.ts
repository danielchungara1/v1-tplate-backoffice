import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/shared/layout/layout.component';
import {LoginComponent} from './components/login/login.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: '**', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
