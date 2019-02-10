import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardService as AuthGuard } from './security/auth-guard.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: HomepageComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'shop' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}