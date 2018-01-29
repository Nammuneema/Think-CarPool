import { LogedInService } from './../loged-in.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { SearchDataService } from './../search-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { RequestService } from './../request.service';
import { SearchQuery } from './searchQuery';
import { OfferedRide } from './OfferedRide';
import { Component, OnInit } from '@angular/core';
import { OfferrideComponent } from '../offerride/offerride.component';
import { offerRiderDetails } from './OfferRiderDetails';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
 
})
export class SearchResultsComponent implements OnInit {
  @Input('id') data : any[]
  resultDemo : OfferedRide[] ;
  userDetails : any = {firstName : "",
                      lastName : "",
                      conactNo : ""};
  noOfSeats;
  rideId;
  totalSeats;
  
 
  
  
  constructor(private searchRequest : RequestService , private router : Router ,
    private modalService:NgbModal, private searchDataSearvice : SearchDataService,private loginService : LogedInService )
  {}
   

  ngOnInit()
  {
    this.resultDemo = this.searchDataSearvice.data;
    console.log(this.resultDemo)  
  }


  showProfile(id,username)
  {
    console.log(id);
    this.rideId =id;
    this.searchRequest.getProfile(username).subscribe(
      response => {
        console.log(response);
        this.userDetails = response.json()
      },
      error =>
      {
        console.log(error);
      }

    );
  }

  bookRide()
  {
    console.log(this.noOfSeats);

    if(this.loginService.loginStatus)
    {
      this.searchRequest.bookRideRequest(this.rideId,this.noOfSeats).subscribe(
        response => 
        {
          console.log(response);
          if(response.status === 200)
          {
            const modalRef = this.modalService.open(ModalComponent);
            modalRef.componentInstance.errorType = 'Ride Booked Successfully';
            this.router.navigate(["/"]);
        }
        else
        {
          const modalRef = this.modalService.open(ModalComponent);
            modalRef.componentInstance.errorType = 'Problem with the entered no of Seat';
        }
        },
        error => 
        {
          console.log(error);
        }
      );
    }
    else{
      const modalRef = this.modalService.open(ModalComponent);
            modalRef.componentInstance.errorType = 'You Need to login first';
            this.router.navigate(["/Login"]);
    }
  }
 
  
}
