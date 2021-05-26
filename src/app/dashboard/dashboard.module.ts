import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutComponent} from './access/shared/layout/layout.component';
import {HeaderComponent} from './access/shared/header/header.component';
import {CoreModule} from '@core/core.module';
import {UserListComponent} from './access/components/user/user-list/user-list.component';
import {SidebarComponent} from './access/shared/sidebar/sidebar/sidebar.component';
import { UserAddEditComponent } from './access/components/user/user-add-edit/user-add-edit.component';
import { UserDeleteComponent } from './access/components/user/user-delete/user-delete.component';
import { PermissionListComponent } from './access/components/permission/permission-list/permission-list.component';
import { RoleListComponent } from './access/components/role/role-list/role-list.component';
import { RoleAddEditComponent } from './access/components/role/role-add-edit/role-add-edit.component';
import { RoleDeleteComponent } from './access/components/role/role-delete/role-delete.component';
import { BrandListComponent } from './access/components/brand/brand-list/brand-list.component';
import { BrandAddEditComponent } from './access/components/brand/brand-add-edit/brand-add-edit.component';
import { BrandDeleteComponent } from './access/components/brand/brand-delete/brand-delete.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    UserListComponent,
    SidebarComponent,
    UserAddEditComponent,
    UserDeleteComponent,
    PermissionListComponent,
    RoleListComponent,
    RoleAddEditComponent,
    RoleDeleteComponent,
    BrandListComponent,
    BrandAddEditComponent,
    BrandDeleteComponent
  ],
  imports: [
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule {
}
