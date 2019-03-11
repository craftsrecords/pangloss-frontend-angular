import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
