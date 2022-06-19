import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
 @Input() product:Product={id:"",name:"Pen",description:"",price:"",stock:0};
  constructor(private cartserv:CartService) { }

  ngOnInit(): void {
    
    
  }
  AddToCart(product:Product){
    this.cartserv.AddToCart(product);
  }

}
