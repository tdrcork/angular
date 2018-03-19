/* FILES */

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
/* ANGULAR */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import Amplify, { Auth } from 'aws-amplify';
import AuthClass from 'aws-amplify/lib/Auth/Auth';
import { User } from 'aws-amplify/node_modules/aws-sdk/clients/mq';

/* NGRX */
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

/* COMPONENTS */
import { AppComponent } from './app.component';
// auth
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
// nav
import { PreHeaderComponent } from './navigation/pre-header/pre-header.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
// pages
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';

/* SERVICES */
import { UIService } from './shared/ui/ui.service';
import { AuthService } from './auth/controller/auth.service';

/* Design Modules */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PreHeaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
  ],
  providers: [UIService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
