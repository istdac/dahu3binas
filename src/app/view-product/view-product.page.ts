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
  public id: string;
  constructor(private prodServ: ProductService, private aroute: ActivatedRoute) { 
    this.product= {
      name:'',
      price:0,
      quantity:0,
      photo:''
    };
  }

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params)=>{
        this.prodServ.getProductById(params.id).subscribe(item=>{
          this.product=item as Product;
          this.id= params.id;
        });
      }
    );
  }

}
