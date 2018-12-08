import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API = 'http://localhost:3000/apilab/product';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(this.URL_API);
    /*
    this.http.get(this.URL_API)
    .subscribe(result => {
      this.productList = result as Product[];
    });
    */
  }

  insertProduct(product: Product) {
    return this.http.post(this.URL_API, Product);
    /*
    this.productList.push({
      id_product: product.id_product,
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
      });
      */
  }

  updateProduct(product: Product) {
    return this.http.put(this.URL_API + '/' + product.id_product, product);
  }

  deleteProduct(id_product: string) {
    return this.http.delete(this.URL_API + '/' + id_product);
  }

}
