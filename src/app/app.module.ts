import { SearchDataService } from './search-data.service';
import { RequestService } from './request.service';
import { TestService } from './test.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferrideComponent } from './offerride/offerride.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { NotFoundComponent } from './not-found/not-found.component';
import { OfferedRide } from './search-results/OfferedRide';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogedInService } from './loged-in.service';
import { ModalComponent } from './modal/modal.component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';


const appRoutes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'Register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'Home',
    component: HomePageComponent,
    data: { title: 'Home' }
  },
  {
    path: 'Result',
    component: SearchResultsComponent,
    data: { title: 'Rides For You' }
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    data: { title: 'UserName' }
  },
  {
    path: '',
    redirectTo: 'Home', pathMatch: 'full',
    data: { title: 'Homepage' }
  },

  {
    path : 'notFound',
    component : NotFoundComponent,
    data : {title : "NOt Found"}
  },

  {
    path : 'offerRide',
    component : OfferrideComponent,
    data : {title :"Offer Ride"}

  },
  {
    path : "dashboard",
    component : DashboardComponent,
    data :{title:"DashBoard"}
  },

  {
    path: '**',
    redirectTo : 'notFound' ,
    data: {title: "Not Found"} 
  },

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    OfferrideComponent,
    HeaderComponent,
    FooterComponent,
    SearchResultsComponent,
    ProfileComponent,
    NotFoundComponent,
    OfferrideComponent,
    DashboardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [RequestService,SearchDataService,LogedInService,CookieService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent,
    ]
})
export class AppModule { 
  constructor(private searchDataService : SearchDataService , private request : RequestService,
  private  loginService: LogedInService ,private cookiesForSession : CookieService){}
}