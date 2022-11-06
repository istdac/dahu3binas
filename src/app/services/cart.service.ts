import { ProductService } from './product.service';
import { Product } from './../models/product';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  constructor(private ps:ProductService) {
    this.cart = {products: [], total: 0};
   }
   public getCart(){
    return this.cart;
   }

   public addProductToCart(p: Product){
      console.log(this.cart);
      if((this.cart.products.findIndex(
        (prod)=>prod.idProduct===p.idProduct
      ))===-1){
        this.cart.products.push(p);
        console.log(this.cart);
      }

      let pro = this.cart.products.find(
        (prod)=>prod.idProduct===p.idProduct
      );
      pro.quantity++;
      this.cart.total+=p.price;
   }

}
