import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service
import { ProductService } from '../../../services/product.service';

// Class
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProducts() {
    this.productService.getProduct()
    .subscribe(res => {
      this.productService.productList = res as Product[];
    });
  }

  addProduct(productForm?: NgForm) {
    console.log(productForm.value);
    if (productForm.value.id_product) {
      this.productService.insertProduct(productForm.value)
      .subscribe(res => {
        this.resetForm(productForm);

      });
    }
  }


  

  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct = new Product();
  }

}
