import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAddProductPageRoutingModule } from './view-add-product-routing.module';

import { ViewAddProductPage } from './view-add-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAddProductPageRoutingModule
  ],
  declarations: [ViewAddProductPage]
})
export class ViewAddProductPageModule {}
