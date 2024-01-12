import {CartItem} from "./cart-Item";
// @ts-ignore
import String from "$GLOBAL$";
// @ts-ignore
import Array from "$GLOBAL$";


export class Order{

  id:String|any;
  orderProducts : Array<CartItem> |any;


  constructor(id: any, orderProducts: any) {
    this.id = id;
    this.orderProducts = orderProducts;
  }



}
