import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart';
import { DomSanitizer, SafeHtml, SafeScript } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  @Input() cart: Cart

  constructor(private cartService: CartService) {

   }

  ngOnInit() {
     
  }

  ngAfterViewInit(): void {

  }

  private changeAddress() {
    this.cartService.udpateAddress(this.cart) 
  }

}
