import { Router } from '@angular/router/';
import { RequestService } from './../request.service';
import { LogedInService } from './../loged-in.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  loginStatus : boolean;
  userName : string;
  constructor( public  loginService: LogedInService, private request : RequestService
  ,private router : Router , private cookies : CookieService) { }

  ngOnInit() {
    //console.warn("Header ka hun " + (this.cookies.get("loginStatus") === "true") );
    //this.loginStatus = (this.cookies.get("loginStatus") === "true" );
    // if(this.loginStatus)
    // {
    //   this.userName = this.cookies.get("userName");
    // }
  }

  logout()
  {
    console.log("Ho RAha HE")
    this.request.logoutRequest().subscribe(
     (response)=>
     {
       console.log(response);
     },
     (error) =>
     {
        console.log(error);
     }, 
      ()=>
      {
        this.loginService.loginStatus = false;
       this.cookies.set("loginStatus","false");
        this.cookies.delete("userName");
        this.router.navigate(['/']);
      }
    )
  }

  ngOnDestroy()
  {
    
  }

}
