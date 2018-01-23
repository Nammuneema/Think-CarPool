export class offerRiderDetails
{
    userName : string;
    licenseNumber : string;
    vehicleRegistrationNumber : string;
    verificationStatus : boolean;
    insurance : boolean;

    constructor(userName : string,licenseNumber : string , 
        vehicleRegistrationNumber : string , verificationStatus : boolean,
        insurance : boolean)
    {
        this.insurance = insurance;
        this.vehicleRegistrationNumber = vehicleRegistrationNumber;
        this.userName = userName;
        this.verificationStatus = verificationStatus;
        this.licenseNumber = licenseNumber;
    }
}