import { CookieService } from 'ngx-cookie-service';
import { LogedInService } from './../loged-in.service';
import { Router } from '@angular/router';
import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { Login } from './Login';
import { RequestService } from '../request.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  entryComponents: [
    ModalComponent,
    ],
    providers : [NgbModal]

})
export class LoginComponent implements OnInit ,OnDestroy {
  userName : string;
  constructor(private loginRequest : RequestService, private router: Router,
    private loginService : LogedInService,private cookies : CookieService,
    private modalService: NgbModal) { }
  ngOnInit(){
    // if(this.cookies.check("userName"))
    // {
    //   this.userName = this.cookies.get("userName");
    // }
  }

  onSubmit(formData : NgForm)
  {
    let login : Login = formData.value
    let username : any;
    

    console.log(login);
    this.loginRequest.loginRequest(login).subscribe(
          (response) =>{
            console.log(response);
            if(response.status == 200)
            {
            
           this.cookies.set("loginStatus","true");
            this.loginService.loginStatus=true;
            username = response;
            this.loginService.userName = username._body;
            this.cookies.set("userName" , username._body);
            this.router.navigate(["/dashboard"]);
            }
                    
          }   
          ,error =>
          {
            const modalRef = this.modalService.open(ModalComponent);
              modalRef.componentInstance.errorType = 'Invalid user name or password';

          }
    )
    
  }
  

  ngOnDestroy(){}
}

  
  
  

