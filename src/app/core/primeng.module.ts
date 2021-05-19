import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    MessageService
  ]
})
export class PrimengModule { }
