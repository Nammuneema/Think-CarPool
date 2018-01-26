

export class User
{
    userName : string;
    firstName : string;
    lastName : string;
    email : string;
    contactNo : string;
    gender : string;
    accountStatus : boolean;
    registrationDate : string;
    rides : any[];
    bookedRideDetails : any[];
    offerRiderDetails : any;
    varifiedUser : any;


    constructor(userName : string, firstName : string, lastName : string, email : string,
                contactNo : string , gender : string ,accountStatus : boolean
                ,registrationDate : string)
                {
                    this.userName = userName;
                    this.firstName = firstName;

                    this.lastName = lastName;
                    this.email = email;
                    this.contactNo = contactNo;
                    this.gender = gender;
                    this.accountStatus = accountStatus;
                    this.registrationDate = registrationDate;
                }

    
   
    
}