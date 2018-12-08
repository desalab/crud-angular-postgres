import { Component, OnInit } from '@angular/core';

// model
import { Product } from '../../../models/product';

// service
import { ProductService } from '../../../services/product.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.productService.getProducts();
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = product;
  }

  onDelete(id_product: number) {
    if ( confirm('Are you sure ?')) {
      this.productService.deleteProduct(id_product)
      .subscribe(res => {
        console.log(res);
        this.productService.getProducts();
      });
      //this.toastr.success('Successfull Operation', ' Deleted' );
    }
  }

}
