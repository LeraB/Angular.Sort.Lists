import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product[];
  @Input() isInFavoriteList: boolean;

  @Output() addToList = new EventEmitter<Product>();
  @Output() removeFromList = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  public addProductToList(product: Product) {
    this.addToList.emit(product);
  }

  public removeProductFromList(product: Product) {
    this.removeFromList.emit(product);
  }

}
