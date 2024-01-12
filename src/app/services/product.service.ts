import { Injectable } from '@angular/core';
import {ProductItem} from "../models/product-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getProductById(id:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/"+id);

  }

  getFilteredProducts(searchText: string) {
    return this.http.get<any>(this.apiUrl+"/search?q="+searchText);

  }
}
