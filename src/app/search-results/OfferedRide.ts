export class OfferedRide
{
    private _rideId : number;
    userName : string;
    source : string;
    destination : string; 
    date : string;
    carType : string;
    availableSeats : number;
    totalSeats : number;

    constructor(userName : string, source : string, destination : string
        ,date : string,carType : string,
        availableSeats : number , totalSeats : number)
        {
            this.userName = userName;
            this.source = source;
            this.destination = destination;
            this.date = date;
            this.carType = carType;
            this.availableSeats = availableSeats;
            this.totalSeats = totalSeats;

        }

        set rideId (rideId : number) {
            this._rideId = rideId;
        }

        get rideId() : number {
            return this._rideId;
        }
    
}