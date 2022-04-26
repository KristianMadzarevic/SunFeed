import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
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

  constructor(
    private fb: FormBuilder,
    public _router: Router,
    private _auth: AuthService,
    private _snackBar: MatSnackBar,
    private _global: GlobalService
  ) {}

  ngOnInit(): void {}

  /** Login user on form submit */
  public login(): void {
    // Check form
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }
    // Return if form is empty
    if (!this.loginForm.valid) {
      return;
    }

    this._auth.login(this.loginForm.value).subscribe(
      () => {
        this._global.getFavCities();
          this._global.selectedCities = this._global.favCities;
        this._router.navigate(['/weather']);
      },
      () => {
        this._snackBar.open('Pogrešni podaci', '', {
          duration: 2000,
        });
      }
    );
  }
}
