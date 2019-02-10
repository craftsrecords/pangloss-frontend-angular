import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = 'Pangloss';
  loggedUser: String = '';

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.getLoggedUser();
  }

  logout() {
    this.router.navigate(['login'])
  }

  private getLoggedUser() {
    this.auth.loggedUser().subscribe(username => this.loggedUser = username);
  }

}
