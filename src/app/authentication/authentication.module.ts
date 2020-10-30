import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
// import { AuthenticationComponent } from './authentication.component';
import {ListPageModule} from '../list-page/list-page.module';
import { RegistrationFormComponent } from './registration_form/registration-form/registration-form.component';
// import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 

@NgModule({
  declarations: [ RegistrationFormComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ListPageModule,
    ReactiveFormsModule, 
    FormsModule, 
    // AppRoutingModule,
  ]
})
export class AuthenticationModule { }
