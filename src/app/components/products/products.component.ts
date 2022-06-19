import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { HttpClientService } from 'src/app/services/http-client.service';
import { CartComponent } from '../cart/cart.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[]=[]
  constructor(private httpClient:HttpClientService,private modalService: NgbModal,
    private cartserv:CartService) { }

  ngOnInit(): void {
    this.httpClient.getProducts().subscribe({
      next:(products)=>{
        console.log(products);
        this.products=products;

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  open() {
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.products = this.cartserv.cartList;
  }

}
