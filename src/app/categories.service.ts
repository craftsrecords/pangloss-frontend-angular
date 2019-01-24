import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categorie } from './categorie'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() : Observable<Categorie[]> {
    const categories : Categorie[] = [
     {id: "1", name: "Game Consoles"},
     {id: "2", name: "Phones"},
     {id: "3", name: "Books"}
    ]  
    return of(categories);
  }
}
