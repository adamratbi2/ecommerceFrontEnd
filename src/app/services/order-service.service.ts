import { Injectable } from '@angular/core';
import {CartComponent} from "../cart/cart.component";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private cartUsage:CartComponent|any;
  private orders:Array<Order>|any;


  constructor() { }


}
