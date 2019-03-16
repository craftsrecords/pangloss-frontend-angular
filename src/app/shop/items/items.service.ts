import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  getItemsOfCategory(categoryId : string) : Observable<Item[]> {
    return this.http.post<Item[]>(`${environment.apiUrl}/items`,{'categoryId' : categoryId}, {withCredentials: true})
  }
}
