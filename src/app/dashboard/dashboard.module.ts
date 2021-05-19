import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './access/shared/layout/layout.component';
import { HeaderComponent } from './access/shared/header/header.component';
import {CoreModule} from '@core/core.module';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
