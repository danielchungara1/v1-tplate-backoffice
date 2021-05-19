import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from '@core/interceptors/token.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {HttpService} from '@core/httpClient/http.service';
import {FooterComponent} from '@core/sharedComponents/footer/footer.component';
import {NotificationService} from '@core/notifications/notification.service';
import {MaterialModule} from '@core/material.module';
import {PrimengModule} from '@core/primeng.module';


@NgModule({
  imports: [
    // Modules
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Theme Modules
    FlexLayoutModule,
    FlexModule,
    MaterialModule,
    PrimengModule
  ],
  providers: [
    // Services
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    NotificationService
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FlexModule,
    MaterialModule,
    PrimengModule,
    // Components
    FooterComponent
  ],
  declarations: [
    // Components
    FooterComponent
  ]
})
export class CoreModule {
}
