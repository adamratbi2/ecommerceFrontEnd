import {ProductItem} from "./product-item";

export class CartItem{

   product: ProductItem;
   quantite:number;


    constructor(productItem: ProductItem, quantite: number) {
        this.product = productItem;
        this.quantite = quantite;
    }

}
