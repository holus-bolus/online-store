import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { ProductModel } from '../../models/product.model';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];

  constructor(private cartService: CartServiceService) {}

  ngOnInit() {}

  onColumnsCountChanged(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddTotheCart(product: ProductModel): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
