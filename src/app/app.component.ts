import { RequestService } from './request.service';
import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';
import { Login } from './login/Login';
import { SearchDataService } from './search-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'Think CarPool';
  constructor(private cookies : CookieService)
  {}
  cookieValue : any;

  ngOnInit(): void {
    if(!this.cookies.check('loginStatus'))
    {
      this.cookies.set( 'loginStatus','false' );
    }

  }

}
    