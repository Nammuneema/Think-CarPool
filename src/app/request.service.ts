import { offerRiderDetails } from './search-results/OfferRiderDetails';
import { OfferedRide } from './search-results/OfferedRide';
import { SearchQuery } from './search-results/searchQuery';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Login } from './login/Login';
import { User } from './register/User';
import { RequestOptions } from '@angular/http';



@Injectable()
export class RequestService {

  private httpGetOptions : RequestOptions = new RequestOptions({ withCredentials: true });

  constructor(private httpRequest : Http) { 
    console.log("Ek bar hi bani he");
  }

  //1
  loginRequest(login : Login)
  {
    return this.httpRequest.post('http://192.168.43.4:14718/thinkcar/request/login',login,this.httpGetOptions);
  }

  //2 192.168.43.4:14718
  registerRequest(user : User,login : Login){

    console.warn(login.userName)
    class LoginHandler
    {
      constructor(private user : User , private login : Login){}
    }
    let test = new LoginHandler(user , login);
    console.warn(test);
    //192.168.43.4:14718
    return this.httpRequest.post('http://192.168.43.4:14718/thinkcar/request/register',test,this.httpGetOptions)
  }

  searchRideRequest(searchQuery : SearchQuery)
  {
    return this.httpRequest.get("http://192.168.43.4:14718/thinkcar/request/search/"+searchQuery.source+"/"+searchQuery.destination+"/"+searchQuery.date,this.httpGetOptions);
  }

  updateProfileRequest(user : User)
  {
    return this.httpRequest.post("http://192.168.43.4:14718/thinkcar/request/updateProfile",user,this.httpGetOptions);
  }

  OfferRideRequest(offerRiderDetailsObj : OfferedRide)
  {
    return this.httpRequest.post("http://192.168.43.4:14718/thinkcar/request/offer",offerRiderDetailsObj,this.httpGetOptions);
  }

  getProfileRequest()
  {
    return this.httpRequest.get("http://192.168.43.4:14718/thinkcar/request/profile",this.httpGetOptions);
  }

  
  getProfile(userName)
  {
    return this.httpRequest.get("http://192.168.43.4:14718/thinkcar/request/userdetail/"+userName,this.httpGetOptions);
  }

  bookRideRequest(id,noOfSeats)
  {
    let bookRide = {"rideId":id,
                "noOfSeats": noOfSeats}
    return this.httpRequest.post("http://192.168.43.4:14718/thinkcar/request/bookride",bookRide,this.httpGetOptions);
  }

  listedRideRequest()
  {
    return this.httpRequest.get("http://192.168.43.4:14718/thinkcar/request/listedrides",this.httpGetOptions);
  }

  bookingDetailsRequest()
  {
    return this.httpRequest.get("http://192.168.43.4:14718/thinkcar/request/bookingdetails",this.httpGetOptions);
  }

  logoutRequest()
  {
    return this.httpRequest.post("http://192.168.43.4:14718/thinkcar/request/logout","",this.httpGetOptions);
  }

  changePasswordRequest(oldPwd , newPwd)
  {
   let pwd = {
     "oldPassword" : oldPwd,
     "newPassword" : newPwd
    }
    return this.httpRequest.post("http://192.168.43.4:14718/thinkcar/request/changepassword",pwd,this.httpGetOptions);
  }

  

}

  