import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[];
  selectedProduct: Product = new Product();

  URL_API = 'http://localhost:3000/apilab/product';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.URL_API);
  }

  insertProduct(product: Product) {
    return this.http.post(this.URL_API, Product);
  }

  updateProduct(product: Product) {
    return this.http.put(this.URL_API + '/' + product.id_product, product);
  }

  deleteProduct(id_product: string) {
    return this.http.delete(this.URL_API + '/' + id_product);
  }

}
