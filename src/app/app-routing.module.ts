import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'security', loadChildren: () => import('./security/security.module').then(module => module.SecurityModule)}, // lazy load
  {path: '**', redirectTo: 'security/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
