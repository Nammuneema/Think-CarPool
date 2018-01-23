
export class User
{
    userName : string;
    name : string;
    email : string;
    contactNo : string;
    gender : string;
    accountStatus : boolean;
    registrationDate : string;


    constructor(userName : string, name : string, email : string,
                contactNo : string , gender : string ,accountStatus : boolean
                ,registrationDate : string)
                {
                    this.userName = userName;
                    this.name = name;
                    this.email = email;
                    this.contactNo = contactNo;
                    this.gender = gender;
                    this.accountStatus = accountStatus;
                    this.registrationDate = registrationDate;
                }
   
    
}