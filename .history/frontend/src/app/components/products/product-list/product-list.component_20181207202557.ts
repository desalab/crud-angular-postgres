import { Component, OnInit } from '@angular/core';

// model
import { Product } from '../../../models/product';

// service
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    return this.productService.getProducts()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id_product"] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete(id_product: string) {
    if ( confirm('Are you sure ?')) {
      this.productService.deleteProduct(id_product);
    }
  }

}
