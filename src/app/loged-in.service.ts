import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class LogedInService {
  userName : string;
  loginStatus : boolean = false;  
  constructor(private cookie : CookieService) { 

    this.loginStatus = (this.cookie.get("loginStatus") === "true");
    if(this.loginStatus)
    {
      this.userName = cookie.get("userName");
    }
  }


}
