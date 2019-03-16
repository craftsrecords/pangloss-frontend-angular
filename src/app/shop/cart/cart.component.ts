import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart';
import { of } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart
  errorMessage: string = 'Please fill a correct delivery address and choose some items'
  hasErrors: boolean = false

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  private changeAddress() {
    this.updateAddress()
    this.hasErrors = false
  }

  private updateAddress(){
    this.cartService.udpateAddress(this.cart).subscribe(cart => this.cart.address = cart.address, error => this.hasErrors=true)
  }

  private purchase() {
    if (this.isPurchasable()) {
      this.hasErrors = false
      this.cartService.purchase(this.cart)
    }else{
      this.hasErrors = true
    }
  }

  private isPurchasable(): Boolean{
    return !this.hasErrors && this.cart.address && this.cart.items && this.cart.items.length > 0
  }
}
