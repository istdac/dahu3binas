import { Injectable } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[];
  private cart:Product[];
  constructor() { 
    this.products = [{
      idProduct: '1',
      name:"manzana",
      price:15,
      photo:"https://picsum.photos/200"
    },{
      idProduct: '2',
      name:"platano",
      price:20,
      photo:"https://picsum.photos/200"
    },{
      idProduct: '3',
      name:"pera",
      price:25,
      photo:"https://picsum.photos/200"
    }]
    this.cart=[]
  }
  public getProducts():Product[]{
    return this.products
  }
  public getCart():Product[]{
    return this.cart;
  }
  public getProductById(id:string):Product{
    let item:Product;
    item = this.products.find(
      (produ)=> produ.idProduct===id
    );
    return item;
  }

  public addProductToCart(p:string){
    if(this.cart.length===0){
      this.cart.push(this.getProductById(p))
    }
    let item2=this.cart.find(
      (prod)=>prod.idProduct===p
    );
    if (item2!==null){
      item2.price+=this.getProductById(p).price
    } else {
      this.cart.push(this.getProductById(p))
    }
  }
}
