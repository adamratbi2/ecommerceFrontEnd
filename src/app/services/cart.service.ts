import { Injectable } from '@angular/core';
import {ProductItem} from "../models/product-item";
import {CartItem} from "../models/cart-Item";
import {Order} from "../models/order";

@Injectable({

  providedIn: 'root'

})

export class CartService {

  private storageKey:string="cartItems";

  itemProducts : Array<CartItem> = [];

  cartHistory:Array<Order> = [];

  constructor() {
    if (!sessionStorage.getItem(this.storageKey)){
      sessionStorage.setItem(this.storageKey,JSON.stringify([]));
    }
  }

 /* addToCart(productItem: ProductItem | any, quantite: number){
    const prod=new ProductItem(productItem?.id,productItem?.title,productItem?.thumbnail,productItem?.description,productItem?.price,productItem?.disponibilite);
    if(prod instanceof ProductItem){
      let carItem=this.itemProducts.find(item=>item.product?.id===productItem.id);
      if (carItem){
        carItem.quantite+=quantite;
      }else {
        this.itemProducts.push(new CartItem(productItem,quantite));

      }
    }
    sessionStorage.setItem(this.storageKey,JSON.stringify(this.itemProducts));

  }*/


  addToCart(productItem: ProductItem | any, quantite: number) {
    const prod = new ProductItem(
      productItem?.id,
      productItem?.title,
      productItem?.thumbnail,
      productItem?.description,
      productItem?.price,
      productItem?.disponibilite
    );

    if (prod instanceof ProductItem) {
      // Retrieve existing cart items from sessionStorage
      const existingItemsStr = sessionStorage.getItem(this.storageKey);
      let existingItems: CartItem[] = [];

      if (existingItemsStr) {
        existingItems = JSON.parse(existingItemsStr);
      }

      // Check if the product already exists in the cart
      let carItem = existingItems.find(item => item.product?.id === productItem.id);

      if (carItem) {
        carItem.quantite += quantite;
      } else {
        existingItems.push(new CartItem(productItem, quantite));
      }

      // Update sessionStorage with the merged items
      sessionStorage.setItem(this.storageKey, JSON.stringify(existingItems));
    }
  }


  deleteFromCart(productId: number) {
    // Retrieve existing cart items from sessionStorage
    const existingItemsStr = sessionStorage.getItem(this.storageKey);
    let existingItems: CartItem[] = [];

    if (existingItemsStr) {
      existingItems = JSON.parse(existingItemsStr);
    }

    // Find the index of the item to delete
    const index = existingItems.findIndex(item => item.product?.id === productId);

    if (index !== -1) {
      // Remove the item from the array
      existingItems.splice(index, 1);

      // Update sessionStorage with the updated items
      sessionStorage.setItem(this.storageKey, JSON.stringify(existingItems));
    }
  }



  getItems(){
    let items =sessionStorage.getItem("cartItems");
    return items?JSON.parse(items):[];
  }

  getHistory(){
    let items =sessionStorage.getItem("history");
    return items?JSON.parse(items):[];
  }

  clearWhenCheckedOut(){
    let order=new Order(1,this.getItems());
    sessionStorage.removeItem("cartItems");
    let history=this.getHistory();
    history.push(order);
    sessionStorage.setItem("history",JSON.stringify(history));
  }



}
