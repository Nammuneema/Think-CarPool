import { Login } from './../login/Login';
import { User } from './User';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date : Date = new Date();
  constructor(private test : TestService) { }

  onSubmit(f : NgForm)
  {
    f.value
    this.test.testHttpRegister(new User("nam1237","Naman","Gupta",
    "nammu.neema@gmail.com",
    "9179368477","Male",true,"2018-01-24"),new Login("nam1237",1234)
    ).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  ngOnInit() {
  }

}
