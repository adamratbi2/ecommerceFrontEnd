import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Order} from "../models/order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{





  //currentItems=this.cartService.getItems();

  allItems: Array<Order> | undefined;

  constructor(private cartService:CartService) {

  }

  ngOnInit() {
    this.allItems=this.cartService.getHistory();
    console.log(this.allItems);

  }

  getTotalPrice(hamid:any): number {
    return hamid.reduce((acc: any, prod: { product: { price: any; }; }) => acc + prod.product.price, 0);
  }

}
