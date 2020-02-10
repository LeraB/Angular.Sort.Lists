import {Component, OnInit} from '@angular/core';
import products from '../../constants/products';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {

  public products = products;

  public filteredProducts = products;

  public favoriteProducts = [];

  constructor() {
  }

  ngOnInit() {
  }

  search(inputEl) {
    const value = inputEl.value;
    this.filteredProducts = this.products.filter(product => product.Title.toLowerCase().match(value.toLowerCase()));
  }

  sortASC(field) {
    this.products.sort((a, b) => {return (a[field] > b[field]) ? 1 : -1; });
  }

  sortDESC(field) {
    this.products.sort((a, b) => {return (a[field] > b[field]) ? -1 : 1; });
  }

}
