import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DatePipe} from '@angular/common';
import {CoreModule} from '@core/core.module';



@NgModule({
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule
    // AuthModule // eager load
    // ShopModule // eager load

  ],
  declarations: [
    AppComponent
   ],
  bootstrap: [AppComponent],
  providers: [DatePipe],
  exports: [CoreModule]
})
export class AppModule {
}
