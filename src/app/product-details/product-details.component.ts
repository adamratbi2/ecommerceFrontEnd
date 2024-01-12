import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductItem} from "../models/product-item";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{

  product: ProductItem | undefined ;

  constructor(private route:ActivatedRoute, private prod:ProductService,private car:CartService) {
  }

  ngOnInit(){
    const id:number=this.route.snapshot.params['id'];

    this.prod.getProductById(id).subscribe(
      (response: any) => {
        this.product = response;
      },
      (error: any) => {
        console.error('Failed to load products', error);
      }
    );

  }

  addToCart(product: ProductItem | undefined, qte: number){
    this.car.addToCart(product,qte);

  }

  // Using it in a component
  deleteItem(productId: number) {
    this.car.deleteFromCart(productId);
  }


  protected readonly parseInt = parseInt;
}
