import { Router } from '@angular/router/';
import { LogedInService } from './../loged-in.service';
import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userBasic : any ;
  userBookedRide : any[];
  userOfferedRide : any[];
  constructor(private getProfileDetails : RequestService, private loginService : LogedInService,
  private router :Router) 
  { 
    
  }

  ngOnInit() {
    
    if(this.loginService.loginStatus)
    {
    this.getProfileDetails.getProfileRequest().subscribe(
      (response) => 
      {
        this.userBasic = response.json();
        console.log(response);
      },
      (error) =>
      {
        console.log(error);
      }
    );

    this.getProfileDetails.listedRideRequest().subscribe
    (
      response =>
      {
        console.log(response);
        this.userOfferedRide = response.json();
        console.warn(this.userOfferedRide[0].source);
      },
      error =>
      {
        console.log(error)
      }
    );

    this.getProfileDetails.bookingDetailsRequest().subscribe(

      response =>
      {
        console.log(response);
        this.userBookedRide=response.json();
        console.warn(this.userBookedRide[0].bookId);
      },
      error =>
      {
        console.log(error);

      }
    )
  }
  
  else
  {
    this.router.navigate(["/Login"]);
  } 
  }
}