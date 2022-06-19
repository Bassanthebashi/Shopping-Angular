import { Component, OnInit, NgZone } from '@angular/core';
import { Order } from 'src/app/Models/Order';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: Order []=[]
  constructor(private http: HttpClientService, private ngZone:NgZone) { }

  ngOnInit(): void {
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
      next:(mess)=>{console.log(mess);
       
       this.ngZone.run(()=>{this.orders.map(e=>{
        if(e.id==orderId)
        e.approval=true;
       })});
      },
      error:(err)=>{console.log(err);
      }
    })
  }

}
