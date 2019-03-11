import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from './item';
import { ItemsService } from './items.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnChanges {

  @Input() cart: Cart
  @Input() categoryId: string
  items: Item[]

  constructor(private itemsService: ItemsService, private cartService: CartService) { }

  ngOnInit() {
    this.retrieveItems()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryId'] !== undefined)
      this.retrieveItems()
  }

  private retrieveItems() {
    this.itemsService.getItemsOfCategory(this.categoryId)
      .subscribe(items => this.items = items)
  }

  private addToCart(item:Item){
    this.cartService.addItem(this.cart, item)
  }
}
