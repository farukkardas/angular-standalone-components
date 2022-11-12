import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./components/product-list/product-list.component').then(c => c.ProductListComponent) },
  { path: 'product/:id', loadComponent: () => import('./components/product-detail/product-detail.component').then(c => c.ProductDetailComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
