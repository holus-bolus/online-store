import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input() get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this.cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  constructor(private cartService: CartServiceService) {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}
