import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) { 

  }
  getProducts(){
    return this.http.get<Product[]>("https://localhost:7085/api/Products");
  }
  getOrders(){
    return this.http.get<Order[]>("https://localhost:7085/api/Order/IncludingItems");
  }
  ApproveOrder(orderId:string){
    return this.http.post("https://localhost:7085/api/Order/Approve/"+orderId,orderId);
  }
  SubmitOrder(order:Object ){
    
    return this.http.post("https://localhost:7085/api/Order",order)
  }
}
