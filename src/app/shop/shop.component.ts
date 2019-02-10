import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categorie/categories.service';
import { Observable } from 'rxjs';
import { Categorie } from './categorie/categorie';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: Categorie[]

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories() {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
