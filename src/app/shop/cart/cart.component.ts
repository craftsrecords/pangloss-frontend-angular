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
  errorMessage: string = 'Please fill a delivery address and choose some items'
  addressNotFilled: boolean = false

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }

  private changeAddress() {
    this.cartService.udpateAddress(this.cart)
    this.addressNotFilled = false
  }

  private purchase() {
    if (this.cart.address && this.cart.items && this.cart.items.length > 0) {
      this.addressNotFilled = false
      this.cartService.udpateAddress(this.cart)
      this.cartService.purchase(this.cart)
    }else{
      this.addressNotFilled = true
    }
  }
}
