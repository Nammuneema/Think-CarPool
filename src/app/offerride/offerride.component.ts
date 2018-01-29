import { Router } from '@angular/router/';
import { ModalComponent } from './../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private offerRideRequest : RequestService,private modalService : NgbModal,
  private router : Router) { }

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
        const modalRef = this.modalService.open(ModalComponent);
              modalRef.componentInstance.errorType = 'You offer a ride successfully';
              this.router.navigate(["/Home"]);
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }


}
