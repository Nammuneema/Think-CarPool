import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { LogedInService } from './../loged-in.service';
import { SearchDataService } from '../search-data.service';

import { Routes, RouterModule } from '@angular/router';
import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchQuery } from '../search-results/searchQuery';
import { Router } from '@angular/router/';
import { ActivatedRoute } from '@angular/router';



//import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})
export class HomePageComponent implements OnInit {

  //constructor( ) { }
  constructor(private searchRequest : RequestService,
    private router: Router,private searchDataService : SearchDataService,
    private modalService : NgbModal
  ) {}


  ngOnInit() {
    
  }

  data : any;

  onSearch(formData : NgForm)
  {
    
    console.log(formData.value);
    let search : SearchQuery = formData.value;
    console.log(search);
    this.searchRequest.searchRideRequest(search).subscribe(
      (response ) =>
       {
          console.log(response);
          if(response.status === 200)
          {
            this.searchDataService.data = response.json();
            this.router.navigate(['/Result']);
          }
          else
          {
            const modalRef = this.modalService.open(ModalComponent);
            modalRef.componentInstance.errorType = 'No Ride Found';
          }
      },
      (error) => console.log(error)
    );
  }

}
