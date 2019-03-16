import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from "./category";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`, {withCredentials: true})
  }
}
