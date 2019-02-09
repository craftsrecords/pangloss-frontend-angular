import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    const loginRequest = new HttpParams()
        .set(`username`, username)
        .set(`password`, password)

    return this.http.post<string>(`${environment.backendUrl}/login`, loginRequest)
      .subscribe(message => console.log(message))
  }
}
