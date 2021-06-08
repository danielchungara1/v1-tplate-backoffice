import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {HeaderComponent} from './components/shared/header/header.component';
import {LayoutComponent} from './components/shared/layout/layout.component';
import {LoginComponent} from './components/login/login.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {CoreModule} from '@core/core.module';
import {SignUpComponent} from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    ResetPasswordComponent,
    SignUpComponent
  ],
  imports: [
    SecurityRoutingModule,
    CoreModule
  ],
  exports: [],
  providers: []
})
export class SecurityModule {
}
