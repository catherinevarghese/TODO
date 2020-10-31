import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService} from '../../../_services/authentication.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  error = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  login(value){
    console.log("reached "+ value.email);
    this.authenticationService.login(value.email,value.password).subscribe((user) => {
      console.log(user);
      this.router.navigate(['/list_page']);
    },err =>{
      this.error = false;
      console.log(this.error);
      this.router.navigate(['/home']);
    })
  }

}
