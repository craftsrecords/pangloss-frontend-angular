import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from "./category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() : Observable<Category[]> {
    const categories : Category[] = [
     {id: "1", name: "Game Consoles", image: 'assets/images/categories/gameconsoles.jpg'},
     {id: "2", name: "Phones", image: 'assets/images/categories/phones.jpg'},
     {id: "3", name: "Books", image: 'assets/images/categories/books.jpg'}
    ]  
    return of(categories);
  }
}
