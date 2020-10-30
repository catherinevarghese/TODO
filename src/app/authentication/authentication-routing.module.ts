import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthenticationComponent } from './authentication.component';

import { RegistrationFormComponent } from './registration_form/registration-form/registration-form.component';

const routes: Routes = [{ path: '', component: RegistrationFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
