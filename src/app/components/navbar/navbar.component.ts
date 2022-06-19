import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service/auth.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,private modalService: NgbModal,
    private cartserv:CartService) { }

  ngOnInit(): void {
  }
logout(){
this.cartserv.cartList=[];
this.auth.logout();
}
open() {
  const modalRef = this.modalService.open(CartComponent);
  
  modalRef.componentInstance.products = this.cartserv.cartList;
}
isAdmin(){
  return this.auth.isAdmin();
}
isLogged(){
  return this.auth.isLoggedIn()
}

}
