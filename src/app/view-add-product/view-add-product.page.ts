import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-add-product',
  templateUrl: './view-add-product.page.html',
  styleUrls: ['./view-add-product.page.scss'],
})
export class ViewAddProductPage implements OnInit {

  prodname: string;
  prodprice: number

  constructor(private ps: ProductService, private tc: ToastController) { }

  ngOnInit() {
  }

  public async addProduct() {
    let toast = await this.tc.create({
      message: 'Producto agregado correctamente',
      duration: 1000
    });
    this.ps.addProduct(this.prodname, this.prodprice)
    this.prodname = " "
    this.prodprice = 0;
    toast.present();
  }

}
