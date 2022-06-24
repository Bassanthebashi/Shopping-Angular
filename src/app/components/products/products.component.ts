import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.products$ = this.httpClient.getProducts();
  }
}
