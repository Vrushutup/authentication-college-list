import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import  { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatSliderModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  //   RouterModule.forRoot([
  //     {
  //        path: 'login',
  //        component:LoginComponent
  //     }
  //  ])
  ],
  // exports:[CommonModule,FormsModule, ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
