import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[];
  selectedProduct: Product = new Product();

  URL_API = 'http://localhost:3000/apilab/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.URL_API)
    .subscribe(res => this.productList = res as Product[]);
  }

  insertProduct(product: Product) {
    return this.http.post(this.URL_API, product);
  }

  updateProduct(product: Product) {

    console.log('service update:', product, ' id:', product.id_product);

    return this.http.put(this.URL_API + '/' + product.id_product, product);
  }

  deleteProduct(id_product: number) {
    console.log(id_product);
    return this.http.delete(this.URL_API + '/' + id_product);
  }

}
