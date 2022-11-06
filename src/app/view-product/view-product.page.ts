import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public product: Product;
  constructor(private prodServ: ProductService, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params)=>{
        this.product=this.prodServ.getProductById(params.id);
        console.log(this.product)
      }
    );
  }

}
