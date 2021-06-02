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
import {MapperService} from '@core/mapper/mapper.service';
import {ButtonSubmitComponent} from '@core/components/button-submit/button-submit.component';
import { ProgresBarComponent } from './components/progres-bar/progres-bar.component';
import { SearchComponent } from './components/search/search.component';
import { PagingComponent } from './components/paging/paging.component';


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
    MapperService
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
    FooterComponent,
    ButtonSubmitComponent,
    ProgresBarComponent,
    PagingComponent,
    SearchComponent
  ],
  declarations: [
    // Components
    FooterComponent,
    ButtonSubmitComponent,
    ProgresBarComponent,
    SearchComponent,
    PagingComponent
  ]
})
export class CoreModule {
}
