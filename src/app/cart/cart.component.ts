import {Component, OnInit} from '@angular/core';
import {CartItem} from "../models/cart-Item";
// @ts-ignore
import Array from "$GLOBAL$";
import {CartService} from "../services/cart.service";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  itemProducts : Array<CartItem>;

  constructor(private cartService:CartService,private loginService:LoginService,private router:Router) {
  }

  ngOnInit(): void {
    this.itemProducts=this.cartService.getItems();
  }

  toCheckout(event:{preventDefault:()=>void;}) {
    event.preventDefault();
    if(this.loginService.isAuthenticated()){
      this.router.navigate(["/orders"]);
      this.cartService.clearWhenCheckedOut();
    }else{
      this.router.navigate(["/login"]);
    }

  }

  totalToPay():any{
    let sum:number=0;
    for(const item of this.itemProducts){
      sum+=item.product?.price*(item.quantite);
    }
    return sum+sum*0.1-sum*0.05+sum*0.025;

  }

  total():any{
    let sum:number=0;
    for(const item of this.itemProducts){
      sum+=item.product?.price*(item.quantite);
    }
    return sum;
  }
}
