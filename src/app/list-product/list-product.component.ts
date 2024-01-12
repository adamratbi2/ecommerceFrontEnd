import {Component, OnInit} from '@angular/core';
import {ProductItem} from "../models/product-item";
// @ts-ignore
import Array from "$GLOBAL$";
import {ProductService} from "../services/product.service";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{


//  products:Array<ProductItem>=[];

  products:any;

  constructor(private productService:ProductService, library: FaIconLibrary,private loginService:LoginService,private router:Router) {
    library.addIconPacks(fas, far);
  }
  getState(product : ProductItem){
    if (product.disponibilite){
      return "En Stock";
    }
    return "En Rupture De Stock"
  }

  getColor(product : ProductItem) : string {
    if (product.disponibilite){
      return "green";
    }
    return "red";
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.products;
      },
      (error: any) => {
        console.error('Failed to load products', error);
      }
    );
  }

  updateProducts($event: string) {
    this.productService.getFilteredProducts($event).subscribe((response) => { this.products = response.products});
  }

  getAuthStatus() {
    return this.loginService.isAuthenticated();
  }

  signOut() {
    this.loginService.setAuthenticated(false);
    this.router.navigate(['/login']);
  }
}
