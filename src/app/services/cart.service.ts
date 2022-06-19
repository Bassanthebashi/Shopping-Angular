import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList:{product:Product,Quantity:number}[]=[]
  
AddToCart( product:Product){
  var flag=1;
  this.cartList.map(i=>{
    if(i.product.id==product.id){
      i.Quantity=Number(i.Quantity)+1;
      flag=0
    }
    
  })
  if(flag==1){
    var item={product:product,Quantity:1}
    this.cartList.push(item);
  }
  
}
  constructor() { }
}
