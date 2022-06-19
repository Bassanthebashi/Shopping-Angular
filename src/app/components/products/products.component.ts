import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { HttpClientService } from 'src/app/services/http-client.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[]=[]
  constructor(private httpClient:HttpClientService) { }

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
  

}
