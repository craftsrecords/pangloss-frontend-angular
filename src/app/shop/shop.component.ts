import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './category/categories.service';
import { Observable } from 'rxjs';
import { Category } from "./category/category";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: Category[]
  selectedCategory: Category

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.initiateCategories();
  }

  private initiateCategories() {
    this.categoriesService.getCategories()
      .subscribe(categories =>{ 
        this.categories = categories
        this.selectedCategory = categories[0]
      });
  }

  private onSelect(category: Category) {
    this.selectedCategory = category
  }

}
