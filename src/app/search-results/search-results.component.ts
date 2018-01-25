import { SearchDataService } from './../search-data.service';
import { ActivatedRoute } from '@angular/router';
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
 
  
  
  constructor(private searchRequest : RequestService , private route : ActivatedRoute , private searchDataSearvice : SearchDataService )
  {}
   

  ngOnInit()
  {
    this.resultDemo = this.searchDataSearvice.data;
    console.log(this.resultDemo)  
  }


 
  
}
