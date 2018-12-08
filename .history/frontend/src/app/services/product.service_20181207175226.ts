import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[];

  URL_API = 'http://localhost:3000/apilab/product';

  constructor(private http: HttpClient) { }

  getProduct(): void {
    this.http.get(this.URL_API)
    .subscribe(result => {
      this.productList = result as Product[];
    });
  }

  insertProduct(product: Product): void {
    this.productList.push({
      id_product: product.id_product,
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
      });
  }

}
