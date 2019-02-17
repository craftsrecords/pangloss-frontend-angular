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
   /* console.log(`category ${categoryId}`)
    const items : Item[] = [
      { id: "95", name: 'Game Station IV', image: 'assets/images/consoles/game-station-4.png' },
      { id: "32", name: 'Zune Box One', image: 'assets/images/consoles/zune-box-one.png' },
      { id: "70", name: 'Ouii You', image: 'assets/images/consoles/ouii-you.png' },
      { id: "13", name: 'Ouii', image: 'assets/images/consoles/ouii.png' },
      { id: "84", name: '3DX', image: 'assets/images/consoles/3dx.png' },
      { id: "6", name: 'GameDude', image: 'assets/images/consoles/gamedude.png' },
      { id: "53", name: 'GameSquare', image: 'assets/images/consoles/gamesquare.png' },
      { id: "2", name: 'SupraDrive', image: 'assets/images/consoles/supradrive.png' },
    ]
    return of(items);*/
    return this.http.post<Item[]>(`${environment.backendUrl}/items`,{'categoryId' : categoryId})
  }
}
