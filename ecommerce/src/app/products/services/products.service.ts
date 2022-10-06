import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProdouct(): Observable<any> {
    return this.http.get(environment.baseApi + `products`)
  }
  getAllCategories(): Observable<any> {
    return this.http.get(environment.baseApi + `products/categories`)
  }
  getProductsByCategory(keyword: string): Observable<any> {
    return this.http.get(environment.baseApi + `products/category/` + keyword)
  }
  getProductById(id: any) {
    return this.http.get(environment.baseApi + `products/` + id)
  }

  headers = new HttpHeaders()
    .set('Apipassword', 'as@#@as')
    .set('lang', 'en')
  getAbout(): Observable<any> {
    return this.http.get('https://scriptdemo.soluspot.com/logistics/public/guest/abouts', { headers: this.headers })
  }
}
