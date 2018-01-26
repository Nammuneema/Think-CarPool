import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userBasic : any ;
  userBookedRide : any;
  userOfferedRide : any;
  constructor(private getProfileDetails : RequestService) 
  { 
    
  }

  ngOnInit() {
    this.getProfileDetails.getProfileRequest().subscribe(
      (response) => 
      {
        this.userBasic = response;
        console.log(response);
      },
      (error) =>
      {
        console.log(error);
      }
    );

    
    
  }

}
