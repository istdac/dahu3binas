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

  public products: Product[];
  public cart: Cart;
  constructor(private productservice: ProductService, private router: Router, private cs: CartService, private tc: ToastController) {
    this.productservice.getProducts().subscribe(res=>{
      this.products = res;
      console.log(this.products)
    });
  }

  public async addProductToCart(p: Product){
    let toast = await this.tc.create({
        message: 'Producto agregado al carrito',
        duration: 1000
      });
    this.cs.addProductToCart(p);
    console.log(this.cs.getCart());
    toast.present();
  }
  public addProduct(){
    this.router.navigate(['/view-add-product']);
  }
  public getProductById(id: string){
    console.log(id);
    this.router.navigate(['/view-product'],
      {
        queryParams: {id}
      }
    );
  }
  public getCart(){
      this.router.navigate(['/view-cart']);
  }
}
