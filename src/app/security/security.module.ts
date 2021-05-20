import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {HeaderComponent} from './access/shared/header/header.component';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {LoginComponent} from './access/components/login/login.component';
import {ResetPasswordComponent} from './access/components/reset-password/reset-password.component';
import {CoreModule} from '@core/core.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    ResetPasswordComponent
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
