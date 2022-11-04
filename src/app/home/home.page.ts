import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products:Product[]

  constructor(private productservice: ProductService, private router:Router) {
    this.products = this.productservice.getProducts()
  }

  public addProductToCart(id:string){
    this.productservice.addProductToCart(id);
    console.log(this.productservice)
  }
  public getProductById(idProd:string){
    this.router.navigate(['/view-product'],
      {
        queryParams: {id: idProd}
      }
    )
  }
}
