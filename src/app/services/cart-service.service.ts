import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemsCart = items.find((_item) => item.id === item.id);
    if (itemsCart) {
      itemsCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this._snackBar.open('1 item added to the cart', 'Ok', { duration: 3000 });
  }
  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
}
