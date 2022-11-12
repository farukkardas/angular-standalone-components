import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  products$?: Observable<Product[]>
  constructor() { }

  getAll() {    
    this.products$ = this.http.get<any>(environment.apiUrl + 'products').pipe(map(
      data => data.products
    ));
  }

  get(id: string) {
    return this.http.get<any>(environment.apiUrl + "products/" + id);
  }
}
