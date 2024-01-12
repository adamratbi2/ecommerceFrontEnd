import { Component } from '@angular/core';
import {RegistrationService} from "../services/registration.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor(private registrationService:RegistrationService) {
  }

  submitRegister(ngForm : NgForm){
    //alert(this.users?.length);

    let fd = new FormData();
    fd.append("prenom", ngForm.value["prenom"]);
    fd.append("nom", ngForm.value["nom"]);
    fd.append("sexe", ngForm.value["sexe"]);
    fd.append("username", ngForm.value["username"]);
    fd.append("etatCivil", ngForm.value["etatCivil"]);
    fd.append("password", ngForm.value["password"]);
    fd.append("age", ngForm.value["age"]);


    let plainObject:any = {};
    fd.forEach((value: any, key: any) => plainObject[key] = value);

    let jsonString :any = JSON.stringify(plainObject);


    this.registrationService.submitRegister(jsonString).subscribe((response: any) => {
      console.log(response);
    })
  }
}
