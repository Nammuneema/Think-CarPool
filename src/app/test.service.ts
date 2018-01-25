import { User } from './register/User';

import { HeaderComponent } from './header/header.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Login } from './login/Login';

@Injectable()
export class TestService {

  constructor(private http : Http) { }

  testHttpRequest(login : Login)
  {
   console.log(login); 
    return this.http.post('http://192.168.0.103:8080/thinkcar/request/login',login);
  }

  testHttpRegister(user : User,login : Login)
  {
    class LoginHandler
    {
      constructor(public user : User , public login : Login){
      }
    }
    let loginHandler:LoginHandler = new LoginHandler(user,login);
    console.log(loginHandler);
    console.log(user);
    console.log(login); 
    return this.http.post('http://localhost:8083/thinkcar/request/register', loginHandler);
  }

  // httpOfferRide()
}
