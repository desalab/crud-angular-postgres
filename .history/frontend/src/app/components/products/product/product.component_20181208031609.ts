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
    //this.productService.getProducts();
  }

  getProducts() {
    this.productService.getProducts();
    /*
    .subscribe(res => {
      this.productService.productList = res as Product[];
    });
    */
  }

  addProduct(productForm?: NgForm) {
    console.log(productForm.value);
    if (productForm.value) {
      this.productService.insertProduct(productForm.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(productForm);
        this.getProducts();
      });
    }
  }

  editProduct(product: Product) {
    this.productService.selectedProduct = product;
  }

  deleteProduct(id_product: string, productForm: NgForm) {
    if (confirm('Are you sure ?')) {
      this.productService.deleteProduct(id_product)
      .subscribe(res => {
        this.getProducts();
        this.resetForm(productForm);
      });
    }
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }


}
