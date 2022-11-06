import { Cart } from './../models/cart';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products:Product[];
  public cart:Cart;
  constructor(private productservice: ProductService, private router:Router, private cs: CartService, private tc: ToastController) {
    this.products = this.productservice.getProducts()
  }

  public async addProductToCart(p:Product){
    let toast = await this.tc.create({
        message: 'Producto agregado al carrito',
        duration: 1000
      });
    this.cs.addProductToCart(p);
    console.log(this.cs.getCart());
    toast.present();
  }
  public addProduct(){
    this.router.navigate(['/view-add-product'])
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
