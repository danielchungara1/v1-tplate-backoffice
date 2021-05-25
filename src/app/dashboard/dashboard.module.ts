import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {HeaderComponent} from './access/shared/header/header.component';
import {CoreModule} from '@core/core.module';
import {UserListComponent} from './access/components/user-list/user-list.component';
import {SidebarComponent} from './access/shared/sidebar/sidebar/sidebar.component';
import { UserAddEditComponent } from './access/components/user-add-edit/user-add-edit.component';
import { UserDeleteComponent } from './access/components/user-delete/user-delete.component';
import { PermissionListComponent } from './access/components/permission-list/permission-list.component';
import { RoleListComponent } from './access/components/role-list/role-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    UserListComponent,
    SidebarComponent,
    UserAddEditComponent,
    UserDeleteComponent,
    PermissionListComponent,
    RoleListComponent
  ],
  imports: [
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule {
}
