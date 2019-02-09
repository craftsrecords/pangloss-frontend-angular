import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return of(false)
  };

  isAuthenticated(): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
      })
    }
    return this.http.get<any>(`${environment.backendUrl}/profile`, httpOptions)
      .pipe(map(profile => profile.name !== null), catchError(this.handleError))
  }


  authenticate(username, password) {
    const loginRequest = new HttpParams()
      .set(`username`, username)
      .set(`password`, password)

    return this.http.post<any>(`${environment.backendUrl}/login`, loginRequest)
  }
}
