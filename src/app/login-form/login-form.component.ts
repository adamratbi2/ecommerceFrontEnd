import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {



  constructor(private loginService:LoginService,private router: Router) {
  }

  login(username: string, password: string) {
    this.loginService.authenticated=true;
  }

  checkUser(username : string, password : string){
    let fd=new FormData();
    fd.append("username",username);
    fd.append("password",password);
    let plainObject:any={};
    fd.forEach((value:any,key:any)=>plainObject[key]=value);
    let st:any=JSON.stringify(plainObject);
    this.loginService.submitLogin(st).pipe(
      catchError((error: any) => {
        alert("Wrong Credentiels")
        return throwError(error);
      })
    )
      .subscribe((response: any) => {
        response.json().then((data : any) => {
          const token = data.token;
        });
        alert("Nice")
        this.loginService.setAuthenticated(true);
        this.router.navigate(['/products']).then(() => {
          window.location.href = window.location.protocol + '//' + window.location.host + '/products';
        });
      });


  }


}
