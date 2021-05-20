import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './access/shared/layout/layout.component';
import { HeaderComponent } from './access/shared/header/header.component';
import {CoreModule} from '@core/core.module';
import { UserListComponent } from './access/components/user-list/user-list.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, UserListComponent],
  imports: [
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
