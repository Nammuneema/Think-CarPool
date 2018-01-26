import { Router } from '@angular/router/';
import { RequestService } from './../request.service';
import { LogedInService } from './../loged-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private  loginService: LogedInService, private request : RequestService
  ,private router : Router) { }

  ngOnInit() {
    
  }

  logout()
  {
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
        this.loginService.loginStatus=false;
        this.router.navigate(['/']);
      }
    )
  }



}
