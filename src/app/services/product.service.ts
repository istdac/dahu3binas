import { Injectable } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[];
  constructor() { 
    this.products = [{
      idProduct: '1',
      name:"Manzana",
      price:15,
      photo:"https://picsum.photos/200",
      quantity:0
    },{
      idProduct: '2',
      name:"Platano",
      price:20,
      photo:"https://picsum.photos/200",
      quantity:0
    },{
      idProduct: '3',
      name:"Pera",
      price:25,
      photo:"https://picsum.photos/200",
      quantity:0
    }]
  }
  public getProducts():Product[]{
    return this.products
  }
  public getProductById(id: string):Product{
    let item: Product;
    item = this.products.find(
      (produ)=> produ.idProduct===id
    );
    return item;
  }
  public addProduct(nameProd:string, priceProd:number){
    let p:Product={
      idProduct: this.products.length.toString(), 
      name: nameProd, 
      price: priceProd, 
      photo: "https://picsum.photos/200", 
      quantity: 0};
    this.products.push(p);
  }

}
