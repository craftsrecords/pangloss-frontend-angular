import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuthGuardService as AuthGuard } from './security/auth-guard.service'
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'shop' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}