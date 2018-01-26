import { OfferedRide } from './../search-results/OfferedRide';
import { offerRiderDetails } from './../search-results/OfferRiderDetails';
import { NgForm } from '@angular/forms';
import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerride',
  templateUrl: './offerride.component.html',
  styleUrls: ['./offerride.component.css']
})
export class OfferrideComponent implements OnInit {

  constructor(private offerRideRequest : RequestService) { }

  ngOnInit() {
  }

  onSubmit(formData : NgForm)
  {
    let val =8;
    let offerRiderDetailsObj : OfferedRide = formData.value;
    //offerRiderDetailsObj.rideId = 0;
    offerRiderDetailsObj.totalSeats=8;
    console.log(formData.value);
    this.offerRideRequest.OfferRideRequest(offerRiderDetailsObj).subscribe(
      (respose) => 
      {
        console.log(respose);
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }


}
