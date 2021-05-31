import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TooltipModule} from 'primeng/tooltip';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    TableModule,
    DropdownModule,
    ConfirmDialogModule,
    TieredMenuModule,
    MenuModule,
    TooltipModule,
    MultiSelectModule,
    ChartModule,
    ProgressBarModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class PrimengModule { }
