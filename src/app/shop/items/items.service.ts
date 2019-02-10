import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItemsOfCategory(categoryId : String) : Observable<Item[]> {
    console.log(`category ${categoryId}`)
    const items : Item[] = [
      { id: "95", name: 'XBox', image: 'assets/images/consoles/xbox.jpg' },
      { id: "32", name: 'XBox360', image: 'assets/images/consoles/xbox360.jpg' },
      { id: "70", name: 'Nintendo NES', image: 'assets/images/consoles/nes.jpg' },
      { id: "84", name: 'Nintendo 3DS', image: 'assets/images/consoles/nintendo3ds.jpg' },
    ]
    return of(items);
  }
}
