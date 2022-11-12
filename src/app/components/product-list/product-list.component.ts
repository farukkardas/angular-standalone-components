import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  template: `
  <div class="container">
    <div class="row">
            <div *ngFor="let product of (productService.products$ |async)" class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 p-2">
              <app-product [product]="product"></app-product>
            <div> 
    </div>
  </div>
 `,
  styles: [`

  `],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductComponent
  ],
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService);
  constructor() { }

  ngOnInit(): void {
    this.productService.getAll()
  }

}
