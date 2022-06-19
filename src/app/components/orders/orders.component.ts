import { Component, OnInit, NgZone, Input } from '@angular/core';
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
  GetOrders(){
    this.http.getOrders().subscribe({
      next:(orders)=>{
        console.log(orders);
        
        this.orders=orders
      },
      error:(err)=>{console.log(err);
      }
    })
  }
  Approve(orderId:string){
    this.http.ApproveOrder(orderId).subscribe({
      next:(mess)=>{
        console.log("bassant");
       this.GetOrders();
        
      },
      error:(err)=>{console.log(err);
      }
    })
  }
  Reject(orderId:string){
    this.http.RejectOrder(orderId).subscribe({
      next:(mess)=>{console.log(mess);
        this.GetOrders();
        
       
      },
      error:(err)=>{console.log(err);
      }
    })
  }

}
