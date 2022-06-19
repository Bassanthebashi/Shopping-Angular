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
  @Input() name: any;
  @Input() products: { product: Product, Quantity: Number }[] = [];

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


    this.http.SubmitOrder(order).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);

      },
    })
  }
}

