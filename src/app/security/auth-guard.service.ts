import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private router : Router) { }

  canActivate() :  Observable<boolean> {
    return this.auth.isAuthenticated()
    .pipe(map(this.guard()))

  }

  private guard() {
    return isAuthenticated => {
    if (!isAuthenticated) {
      this.router.navigate(['login']);
    } return isAuthenticated;
    };
  }
}
