import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  constructor(private authService: AuthService,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    if (this.authService.isLoggedIn) {
      this.router.navigate(['/main']);
    }

  }

  get formControls(): any { return this.authForm.controls; }

  signIn(): void {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    this.authService.authenticate(this.authForm.value, this.router);
  }

}
