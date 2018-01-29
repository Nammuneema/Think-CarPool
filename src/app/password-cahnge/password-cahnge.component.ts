import { Router } from '@angular/router/';
import { RequestService } from './../request.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-cahnge',
  templateUrl: './password-cahnge.component.html',
  styleUrls: ['./password-cahnge.component.css']
})
export class PasswordCahngeComponent implements OnInit {

  constructor(private requestudatePwd : RequestService ,private router : Router) 
  {

  }

  ngOnInit() {
  }

  onSubmit(formData : NgForm)
  {
    let passwordData = formData.value;
    console.log(passwordData)
    this.requestudatePwd.changePasswordRequest(passwordData.currentPassword,passwordData.newPassword).subscribe(
      (response) =>
      {
        console.log(response);
        this.router.navigate(['/dashboard']);
      },
      error =>
      {
        console.log(error);
      }
    );
  }

}
