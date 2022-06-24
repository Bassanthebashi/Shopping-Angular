import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  //url: string = "https://shoppingbybassant.azurewebsites.net/";
  url:string="https://localhost:7085/api/";
  constructor(private http:HttpClient) { 

  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "Products");
  }
  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.url +"Order/IncludingItems");
  }
  ApproveOrder(orderId:string):Observable<string>{

    return this.http.post(this.url +"Order/Approve/"+orderId,{},{responseType: 'text'});
  }
  RejectOrder(orderId:string):Observable<string>{
    return this.http.post(this.url +"Order/Reject/"+orderId,{},{responseType: 'text'});
  }
  SubmitOrder(order:Object ):Observable<string>{
    return this.http.post<string>(this.url +"Order",order)
  }
}
