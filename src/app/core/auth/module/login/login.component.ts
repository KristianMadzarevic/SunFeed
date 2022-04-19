import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** Login form */
  public loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  /** For showing the loading component */
  public loading = false;

  constructor(private fb: FormBuilder, public _router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  /** Login user on form submit */
  public login(): void {
    console.log(this.loginForm.controls['email'].errors)
    // Check form
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
        console.log(this.loginForm.controls['email'].errors)
      }
    }
    // Return if form is empty
    if (!this.loginForm.valid) {
      return;
    }

    this._authService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/weather'])
      },
      error => {
        console.log(error);
      }
    )
  }
}
