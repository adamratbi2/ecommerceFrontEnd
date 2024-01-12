import { Injectable } from '@angular/core';
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }


  submitRegister(userForm: any):any {

    return from(fetch("http://localhost:8080/auth/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: userForm
    }));


  }
}
