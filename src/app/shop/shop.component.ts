import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './category/categories.service';
import { Observable } from 'rxjs';
import { Category } from "./category/category";
import { CartService } from './cart/cart.service';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cart: Cart
  categories: Category[]
  selectedCategory: Category

  constructor(private categoriesService: CategoriesService, private cartService: CartService) { }

  ngOnInit() {
    this.initiateCategories()
    this.createCart()
  }

  private createCart() {
    if (this.cart == null) {
      this.cartService.createCart().subscribe(cart => this.cart = cart)
    }
  }

  private initiateCategories() {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this.categories = categories
        this.selectedCategory = categories[0]
      });
  }

  private onSelect(category: Category) {
    this.selectedCategory = category
  }

}
