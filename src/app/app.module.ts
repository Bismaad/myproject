import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DforumComponent } from './dforum/dforum.component';
import { ParticlesModule } from 'angular-particle';
import { ContactusComponent } from './contactus/contactus.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ReportabComponent } from './reportab/reportab.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//services
import { UserService } from "./shared/user.service";
//other
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  // { path: '', component: HeaderComponent },

  { path: '', component: HomepageComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path: 'dforum', component: DforumComponent},
  {path: 'contactus', component: ContactusComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'reportab', component:ReportabComponent},
  {path:'user-profile', component:UserProfileComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    routingComponents,
  
    HomepageComponent,

    DforumComponent,
    ContactusComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    ReportabComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

