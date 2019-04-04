import { Component, OnInit, Input } from '@angular/core'
import { AuthenticationService } from '../security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string = 'Unable to login, please retry'
  hasErrors: boolean = false

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
   this.logout()
  }

  login() {
    this.auth.authenticate(this.username, this.password)
      .subscribe(
        response => this.navigateToShop(),
        error => this.hasErrors = true)
  }

  private navigateToShop() {
    this.hasErrors = false
    this.router.navigate(["shop"])
  }

  private retrieveCsrfToken() {
    this.auth.retrieveCsrfToken().subscribe()
  }

  private logout() {
    //forcing logout when landing on the login page
    this.auth.logout().subscribe()
  }

}
