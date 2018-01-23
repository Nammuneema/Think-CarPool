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
    path: '**',
    redirectTo: 'Home', pathMatch: 'full',
    data: { title: 'Homepage' }
  }
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
