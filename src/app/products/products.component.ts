import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.products);
      console.log(data);
    });
  }
}
