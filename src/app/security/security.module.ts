import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {HeaderComponent} from './view/components/header/header.component';
import {SecurityComponent} from './view/components/security/security.component';
import {FooterComponent} from './view/components/footer/footer.component';
import {LoginComponent} from './view/components/login/login.component';
import {ResetPasswordComponent} from './view/components/reset-password/reset-password.component';
import {CoreModule} from '@core/core.module';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}

@NgModule({
  declarations: [
    HeaderComponent,
    SecurityComponent,
    FooterComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    SecurityRoutingModule,
    CoreModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    MaterialModule,
  ],
  exports: [],
  providers: [
    MessageService
  ]
})
export class SecurityModule {
}
