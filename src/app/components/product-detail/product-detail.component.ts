import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductDetailComponent implements OnInit {
  productService = inject(ProductService)
  productId?: string;
  product?: Product;
  isCompleted?: boolean = false;
  constructor(private router: ActivatedRoute) {
    this.productId = this.router.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.productService.get(this.productId!).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isCompleted = true;
      },
    })
  }

}
