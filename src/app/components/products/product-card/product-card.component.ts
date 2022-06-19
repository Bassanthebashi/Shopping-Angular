import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../../cart/cart.component';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
 @Input() product:Product={id:"",name:"Pen",description:"",price:"",stock:0};
  constructor(private cartserv:CartService,private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    
    
  }
  AddToCart(product:Product){
    this.cartserv.AddToCart(product);
    this.open();
  }
  open() {
    const modalRef = this.modalService.open(CartComponent);
    
    modalRef.componentInstance.products = this.cartserv.cartList;
  }

}
