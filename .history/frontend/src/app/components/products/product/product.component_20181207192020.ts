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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(productForm){

  }

}
