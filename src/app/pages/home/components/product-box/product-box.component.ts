import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: ProductModel | undefined = {
    id: 1,
    title: 'Sneakers',
    price: 250,
    category: 'Shoes',
    description: 'A run sneakers',
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-tree-dasher.jpg?q=h_972,w_1727,x_0,y_0',
  };
  @Output() addToTheCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToTheCart.emit(this.product);
  }
}
