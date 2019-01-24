import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service'
import { Categorie } from '../categorie'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories : Categorie[];

  constructor(private categorieService : CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categorieService.getCategories().subscribe(categories => this.categories = categories)
  }

}
