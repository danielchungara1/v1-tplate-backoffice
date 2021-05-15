import { NgModule } from '@angular/core';
import { SecurityRoutingModule } from './security-routing.module';
import { HeaderComponent } from './view/components/header/header.component';
import { SecurityComponent } from './view/components/security/security.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { LoginComponent } from './view/components/login/login.component';
import { ResetPassComponent } from './view/components/reset-pass/reset-pass.component';
import {CoreModule} from '@core/core.module';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    HeaderComponent,
    SecurityComponent,
    FooterComponent,
    LoginComponent,
    ResetPassComponent
  ],
  imports: [
    SecurityRoutingModule,
    CoreModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
  ],
  providers: [
    MessageService
  ]
})
export class SecurityModule { }
