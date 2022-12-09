import { Injectable } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Product } from '../models/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];
  constructor(private firestore: AngularFirestore) {
    this.products = [{
      idProduct: '1',
      name:'Manzana',
      price:15,
      photo:'https://picsum.photos/200',
      quantity:0
    },{
      idProduct: '2',
      name:'Platano',
      price:20,
      photo:'https://picsum.photos/200',
      quantity:0
    },{
      idProduct: '3',
      name:'Pera',
      price:25,
      photo:'https://picsum.photos/200',
      quantity:0
    }]
  }
  public getProducts(): Observable<Product[]>{
    return this.firestore.collection('productos')
      .snapshotChanges().pipe(
        map(actions=>actions.map(a=>{
            const data = a.payload.doc.data() as Product;
            const id = a.payload.doc.id;
            return {id,...data};
          }))
      );
  }
  public getProductById(id: string){
    let result = this.firestore.collection('productos').doc(id).valueChanges();
    return result;
  }
  public addProduct(nameProd: string, priceProd: number){
    let p: Product={
      name: nameProd,
      price: priceProd,
      photo: 'https://picsum.photos/200',
      quantity: 0};
    this.firestore.collection('productos').add(p);
  }

}
