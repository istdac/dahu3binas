import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAddProductPage } from './view-add-product.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAddProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAddProductPageRoutingModule {}
