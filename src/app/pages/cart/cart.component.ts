import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };
  displayedColumns: any = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {}

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
}
