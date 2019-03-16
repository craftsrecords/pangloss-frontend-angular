import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from './item';
import { ItemsService } from './items.service';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnChanges {

  @Input() cart: Cart
  @Input() categoryId: string
  items: Item[]
  columnsNumber = 3

  constructor(
    private itemsService: ItemsService,
    private cartService: CartService, 
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.retrieveItems()
    this.breakpointObserver
      .observe(['(min-width: 1450px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.columnsNumber = 3
        } else {
         this.columnsNumber = 2
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryId'] !== undefined)
      this.retrieveItems()
  }

  private retrieveItems() {
    this.itemsService.getItemsOfCategory(this.categoryId)
      .subscribe(items => this.items = items)
  }

  private addToCart(item: Item) {
    this.cartService.addItem(this.cart, item).subscribe(cart => this.cart.items = cart.items)
  }
}
