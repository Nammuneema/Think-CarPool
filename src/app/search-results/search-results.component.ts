import { OfferedRide } from './OfferedRide';
import { Component, OnInit } from '@angular/core';
import { OfferrideComponent } from '../offerride/offerride.component';
import { offerRiderDetails } from './OfferRiderDetails';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  
  resultDemo : OfferedRide[] =[];
  
  
  constructor()
  {
  for(let i=0;i<10;i++) {
    this.resultDemo.push(new OfferedRide("Nam"+i,"pune"+i,"indore"+i,"2017-02-1"+i,"Suv",(i+3)%6,6));
    console.log(i);
  }

  for(let i=0;i<10;i++) {
    this.resultDemo.push(new OfferedRide("Nam"+(2*i),"pune"+i,"indore"+i,"2017-03-1"+i,"Suv",(i+3)%6,6));
    console.log(i);
  }
}
  
    

}
