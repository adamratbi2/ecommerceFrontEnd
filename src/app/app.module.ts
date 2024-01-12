import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import {RouterModule} from "@angular/router";
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './pipes/filter.pipe';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import {LoginService} from "./services/login.service";

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CartComponent,
    ProductDetailsComponent,
    LoginFormComponent,
    RegistrationComponent,
    FilterPipe,
    OrderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "products", component: ListProductComponent},
      {path: "cart", component: CartComponent},
      {path: "products/productDetail/:id", component: ProductDetailsComponent},
      {path: "login", component: LoginFormComponent},
      {path: "register", component: RegistrationComponent},
      {path: "orders", component: OrderComponent, canActivate:[LoginService]},
      {path: "", redirectTo: "/products", pathMatch: "full"}
    ]),
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
