import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
 
  @Input() products: { product: Product, Quantity: number }[] = [];

  constructor(public activeModal: NgbActiveModal, private http: HttpClientService, private carServ: CartService) { }
  SubmitOrder() {

    var orderItems: [{
      productId: string;
      productQuantity: number;
    }] = [{
      productId: "",
      productQuantity: 0
    }];

    orderItems.pop();

    
    this.carServ.cartList.map(e => {
      var item = {
        "productId": e.product.id,
        "productQuantity": e.Quantity
      }
      orderItems.push(item);
    })
    console.log(orderItems);

    var order = {
      "orderItems": orderItems
    }

    console.log(order);
    
    this.http.SubmitOrder(order).subscribe({
      next:(data)=>{
        this.products=[];
        this.carServ.cartList=[];
        
      },
      error:(err)=>{
        console.log(err);

      },
    })
   
  }
  change(v:any,id:string){
    
    this.products.map(e=>{
      if(e.product.id==id){
        e.Quantity=v.target.value;
      }
    })
  }
  
}

