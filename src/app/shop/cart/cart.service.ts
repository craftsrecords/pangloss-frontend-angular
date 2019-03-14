import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../items/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers = new HttpHeaders({'Content-Type':'application/json-patch+json'});
  
  constructor(private http:HttpClient) { }

  createCart() : Observable<Cart> {
    return this.http.post<Cart>(`${environment.backendUrl}/carts`,{})
  }

  addItem(cart:Cart, item:Item){
    return this.http.patch<Cart>(cart._links.self.href,
        [{ "op" : "add", "path" : "/items/-", "value" : { "id": item.id, "name": item.name, "price": item.price } }],
        {"headers" : this.headers})
    .subscribe(newCart => {cart.items = newCart.items; cart.address = newCart.address})
  }

  udpateAddress(cart: Cart) {
    return this.http.patch<Cart>(cart._links.self.href,
      [{ "op" : "add", "path" : "/address", "value" : cart.address }],
      {"headers" : this.headers})
  .subscribe(newCart => {cart.items = newCart.items; cart.address = newCart.address})
  }
}
