import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  login(){
    this.router.navigate(['/list_page']);
    console.log("reached ");
    // this.isSubmitted = true;
    // if(this.loginForm.invalid){
    //   return;
    // }
    // // this.authService.login(this.loginForm.value);
    // this.router.navigateByUrl('/list_page');
  }

}
