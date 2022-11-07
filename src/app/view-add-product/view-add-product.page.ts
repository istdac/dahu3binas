import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-add-product',
  templateUrl: './view-add-product.page.html',
  styleUrls: ['./view-add-product.page.scss'],
})
export class ViewAddProductPage implements OnInit {

  prodname:string;
  prodprice:number

  constructor(private ps:ProductService) { }

  ngOnInit() {
  }

  addProduct(){
      this.ps.addProduct(this.prodname, this.prodprice)
  }

}
