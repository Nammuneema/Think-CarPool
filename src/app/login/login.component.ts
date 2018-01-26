import { LogedInService } from './../loged-in.service';
import { Router } from '@angular/router';
import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { Login } from './Login';
import { RequestService } from '../request.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy {
  constructor(private loginRequest : RequestService, private router: Router,
    private loginService : LogedInService) { }
  ngOnInit(){
  }

  onSubmit(formData : NgForm)
  {
    let login : Login = formData.value
    let username : any;
    console.log(login);
    
    this.loginRequest.loginRequest(login).subscribe(
          (response) =>{
            console.log(response);
            this.loginService.loginStatus =true;
            username = response;
            this.loginService.userName = username._body;
            this.router.navigate(["/dashboard"]);

          }   
    )
    
  }
  

  ngOnDestroy(){}
}

  
  
  

