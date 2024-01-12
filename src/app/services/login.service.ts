import { Injectable } from '@angular/core';
import {UserSingle} from "../models/user-single";
import {BehaviorSubject, from, Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{


  constructor(private router:Router) {
  }

  private _authenticated:boolean=false;

  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());

  public isAuthenticated(): boolean {
    return localStorage.getItem('authStatus') === 'true';
  }
  get authenticated(): boolean {
    return this._authenticated;
  }

  set authenticated(value: boolean) {
    this._authenticated = value;
  }

  submitLogin(userForm: any): any {

    return from(fetch("http://localhost:8080/auth/authenticate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: userForm
    }));

  }

  getAuthStatus$() {
    return this.authStatus.asObservable();
  }

  public setAuthenticated(status: boolean): void {
    localStorage.setItem('authStatus', String(status));
    localStorage.setItem("authToken", "");
    this.authStatus.next(status);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isAuthenticated()){
      return true;
    }else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
