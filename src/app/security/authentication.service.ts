import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap, map, catchError, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return of(false)
  };

  private profile() {
    return this.http.get<any>(`${environment.apiUrl}/profile`, { withCredentials: true });
  }


  isAuthenticated(): Observable<boolean> {
    return this.profile()
      .pipe(map(profile => profile.name !== null), catchError(this.handleError))
  }

  loggedUser(): Observable<String> {
    return this.profile().pipe(pluck('name'))
  }

  authenticate(username: string, password: string) {
    return this.retrieveCsrfToken()
      .pipe(flatMap((res) => {
        const loginRequest = new HttpParams()
          .set(`username`, username)
          .set(`password`, password)

        return this.http.post<any>(`${environment.apiUrl}/login`, loginRequest, { withCredentials: true })
      }));
  }

  retrieveCsrfToken() {
    return this.http.get<any>(`${environment.apiUrl}/csrf`)
  }

  logout() {
    return this.http.post<any>(`${environment.apiUrl}/logout`, null)
  }

}
