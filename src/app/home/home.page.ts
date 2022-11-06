import { Cart } from './../models/cart';
import { CartService } from './../services/cart.service';
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

  public products:Product[];
  public cart:Cart;
  constructor(private productservice: ProductService, private router:Router, private cs: CartService) {
    this.products = this.productservice.getProducts()
  }

  public addProductToCart(p:Product){
    this.cs.addProductToCart(p);
    console.log(this.cs.getCart());
  }
  public getProductById(idProd: string){
    this.router.navigate(['/view-product'],
      {
        queryParams: {id: idProd}
      }
    )
  }
  public getCart(){
      this.router.navigate(['/view-cart']);
  }
}
