import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/product';
import { Signup, Signin } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  //get All
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3000/product');
  }
  //get by id
  getProduct(id: number | string): Observable<Iproduct> {
    return this.http.get<Iproduct>('http://localhost:3000/product/' + id);
  }
  private baseUrl = 'http://localhost:3000';

  register(user: Signin): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, user);
  }
  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user`);
  }

  deleteProduct(id: string ): Observable<Iproduct> {
    return this.http.delete<Iproduct>('http://localhost:3000/product/' + id);
  }
  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`${this.baseUrl}/product`, product);
  }

  updateProduct(id:  string, product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      'http://localhost:3000/product/' + id,
      product
    );
  }
  //comment
  getComments(productId: string) {
    return this.http.get(`${this.baseUrl}/products/${productId}/comments`);
  }

  addComment(productId: string, comment: any) {
    return this.http.post(`${this.baseUrl}/products/${productId}/comments`, comment);
  }
  // hasAdminRole(email: string): boolean {

  //   const adminEmails = ['viet@gmail.com'];
  //   return adminEmails.includes(email);
  // }



}
