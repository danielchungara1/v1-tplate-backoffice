import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from '@core/interceptors/token.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {HttpService} from '@core/httpClient/http.service';
import {MaterialModule} from '@core/material.module';
import {PrimengModule} from '@core/primeng.module';
import {FooterComponent} from '@core/components/footer/footer.component';


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
    }
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
