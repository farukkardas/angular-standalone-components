import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  template: ` 
  <div class="card  h-100" style="width: 18rem;">
  <img [src]="product?.images![0]" width="160" height="320" priority class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">{{product?.title}}</h5>
      <p class="card-text">{{product?.description}}</p>
      <a [routerLink]="'product/' + product?.id" class="btn btn-primary">Go details</a>
      </div>
  </div>
  `,
  styles: [`  
 
  `],
  imports: [
    RouterModule
  ]
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
