import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DatePipe} from '@angular/common';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    // Blank intentionally left
    CoreModule,
    // AuthModule // eager load
    // ShopModule // eager load

  ],
  declarations: [
    AppComponent
   ],
  bootstrap: [AppComponent],
  providers: [DatePipe],
  exports: [
  ]
})
export class AppModule {
}
