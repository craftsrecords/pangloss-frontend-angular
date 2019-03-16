import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../items/item';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers = new HttpHeaders({'Content-Type':'application/json-patch+json'});
  
  constructor(private http:HttpClient, private router:Router) { }

  createCart() : Observable<Cart> {
    return this.http.post<Cart>(`${environment.apiUrl}/carts`,{})
  }

  addItem(cart:Cart, item:Item) : Observable<Cart>{
    return this.http.patch<Cart>(cart._links.self.href,
        [{ "op" : "add", "path" : "/items/-", "value" : { "id": item.id, "name": item.name, "price": item.price } }],
        {"headers" : this.headers})
  }

  udpateAddress(cart: Cart) : Observable<Cart>{
    return this.http.patch<Cart>(cart._links.self.href,
      [{ "op" : "add", "path" : "/address", "value" : cart.address }],
      {"headers" : this.headers})
  }

  purchase(cart: Cart){
    const cartId = cart._links.self.href.substring(`${environment.backendUrl}/api/carts/`.length +1)
    window.location.href =`${environment.backendUrl}/purchases/${cartId}`
  }
}
