import { Router } from '@angular/router/';
import { RequestService } from './../request.service';
import { Login } from './../login/Login';
import { User } from './User';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date : Date = new Date();
  genders : string[] = ["MALE","FEMALE","OTHER"];
  constructor(private request : RequestService, private router : Router) { }

  onSubmit(f : NgForm)
  {
        let formData : any = f.value;
        console.warn(formData);
        let user : User = new User(formData.username,formData.firstName,formData.lastName,formData.email
          ,formData.phoneNumber,formData.gender,true,this.date.toDateString());
          let login : Login = new Login(formData.username,formData.password);
          console.log(user.userName + " " + login .userName+ " "+ login.password +" " + this.date.toLocaleDateString("en-US"));
    this.request.registerRequest(user,login).subscribe(
      (response) =>
      {
        console.log(response);
        this.router.navigate(["/Login"]);

      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
