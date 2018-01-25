import { offerRiderDetails } from './search-results/OfferRiderDetails';
import { OfferedRide } from './search-results/OfferedRide';
import { SearchQuery } from './search-results/searchQuery';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Login } from './login/Login';
import { User } from './register/User';



@Injectable()
export class RequestService {
  constructor(private httpRequest : Http) { }

  //1
  loginRequest(login : Login)
  {
    return this.httpRequest.post('http://localhost:9638/thinkcar/request/login',login);
  }

  //2
  registerRequest(user : User,login : Login){
    class LoginHandler
    {
      constructor(private user : User , login : Login){}
    }
    return this.httpRequest.post('http://localhost:9638/thinkcar/request/register',new LoginHandler(user , login))
  }

  searchRideRequest(searchQuery : SearchQuery)
  {
    return this.httpRequest.get("http://localhost:9638/thinkcar/request/search/"+searchQuery.source+"/"+searchQuery.destination+"/"+searchQuery.date);
  }

  updateProfileRequest(user : User)
  {
    return this.httpRequest.post("http://localhost:9638/thinkcar/request/updateProfile",user);
  }

  OfferRideRequest(offerRiderDetailsObj : offerRiderDetails)
  {
    return this.httpRequest.post("http://localhost:9638/thinkcar/request/offer",offerRiderDetailsObj);
  }

  getProfileRequest()
  {
    return this.httpRequest.get("http://localhost:9638/thinkcar/request/profile");
  }

  bookRideRequest(/*rideid , bookRideObj*/)
  {
    return this.httpRequest.post("http://localhost:9638/thinkcar/request/bookride",null);
  }

  listedRideRequest()
  {
    return this.httpRequest.get("http://localhost:9638/thinkcar/request/listedrides");
  }

  bookingDetailsRequest()
  {
    return this.httpRequest.get("/bookingdetails");
  }

  logoutRequest()
  {
    return this.httpRequest.post("/logout","");
  }


  

}

  