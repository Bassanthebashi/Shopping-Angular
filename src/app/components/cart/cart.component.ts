import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import {  tap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
 
  @Input() products: { product: Product, Quantity: number }[] = [];

  constructor(public activeModal: NgbActiveModal, private http: HttpClientService, private carServ: CartService) { }
  SubmitOrder() {

    var orderItems: {
      productId: string;
      productQuantity: number;
    }[]=[]

   
    orderItems=this.carServ.cartList.map(e => {
      return  {
        "productId": e.product.id,
        "productQuantity": e.Quantity
      }
      
    })


    var order = {
      "orderItems": orderItems
    }
    this.http.SubmitOrder(order).pipe(tap(()=>{this.products=[];
      this.carServ.cartList=[]})).subscribe()
   
  }
  changeQuantity(event:any,id:string):void{
    var productItem=this.products.find(p=>p.product.id==id);
    productItem!.Quantity=event.target.value;
  }
  
}

