import {Component, OnInit, Input, Output} from '@angular/core';

import {Product} from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  favouritesList: Array<Product> = [];

  constructor() {
  }

  ngOnInit() {
  }

  isFavorite(product) {
    if (this.favouritesList.indexOf(product) !== -1) {
      return false;
    }
    return true;
  }

  addToFavorites(product) {
    this.favouritesList.push(product);
    const index: number = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  removeToFavorites(product) {
    const index: number = this.favouritesList.indexOf(product);
    if (index !== -1) {
      this.favouritesList.splice(index, 1);
    }
    this.products.push(product);
  }

}
