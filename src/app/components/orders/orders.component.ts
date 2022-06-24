import { Component, OnInit, NgZone, Input } from '@angular/core';
import { tap } from 'rxjs';
import { Order } from 'src/app/Models/Order';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: Order []=[]
  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.GetOrders();
  }
  GetOrders():void{
    this.http.getOrders().pipe(tap((orders)=>{this.orders=orders})).subscribe();
  }
  Approve(orderId:string):void{
    this.http.ApproveOrder(orderId).pipe(tap(()=>{this.GetOrders();})).subscribe()
  }
  Reject(orderId:string):void{
    this.http.RejectOrder(orderId).pipe(tap(()=>{this.GetOrders();})).subscribe()
  }

}
