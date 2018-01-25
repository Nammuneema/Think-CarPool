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
  constructor(private loginRequest : RequestService) { }
  ngOnInit(){
  }

  onSubmit(formData : NgForm)
  {
    let login : Login = formData.value
    console.log(login);
    
    this.loginRequest.loginRequest(login).subscribe(
          (request) =>{
            console.log(request);
          }   
    )
    
  }
  

  ngOnDestroy(){}
}

  
  
  

