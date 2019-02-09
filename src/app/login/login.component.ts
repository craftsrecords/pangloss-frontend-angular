import { Component, OnInit, Input } from '@angular/core'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private auth : AuthenticationService) { }


  ngOnInit() {
  }

  login() {
    this.auth.authenticate(this.username, this.password)
  }

}
