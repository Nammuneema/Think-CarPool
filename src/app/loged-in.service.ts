import { Injectable } from '@angular/core';

@Injectable()
export class LogedInService {
  userName : string;
  loginStatus : boolean = false;  
  constructor() { }

}
