import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as wooCommerce from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  woo: any;
  products: any;

  constructor(public navCtrl: NavController) {
    this.woo = wooCommerce({
      url: 'https://busolami.000webhostapp.com/',
      consumerKey: 'ck_708fe0e0dcd33e0a0092db0f1241a96cd4a404f9',
      consumerSecret: 'cs_442208ba96bd78b28ca5f8ce2f70fae738e58039  ',
      wpAPI: true,
      version: 'wc/v1'
    });

    this.woo.getAsync('products')
    .then((data)=>{
      console.log(data)
      this.products = JSON.parse(data.body).products;
    }), 
    (err)=>{
      console.log(err);
      this.products = JSON.stringify(err);
    }

  }

}
