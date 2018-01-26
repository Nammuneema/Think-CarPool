import { RequestService } from './request.service';
import { TestService } from './test.service';
import { Component } from '@angular/core';
import { Login } from './login/Login';
import { SearchDataService } from './search-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';
  login : Login
}
    