import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CORRECT_CREDENTIALS } from 'src/app/shared/constants/correct-credentials';
import { Credentials } from 'src/app/shared/models/credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private datePipe: DatePipe) {}

  /** Correct credentials are all contained in a shared folder to be easier to adjust */
  public correctCredentials = CORRECT_CREDENTIALS;

  /**
   * Checks the dummy-data credentials for user information and logs the user in if credentials match
   * @param enteredCreds Credentials that the user has entered on the login form
   * @returns boolean if the user succesfully logged in or not
   */
  public login(enteredCreds: Credentials): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      //If there is a match, return true. Else return false. Using observables here to demonstrate how it would work using a HTTP request
      if (
        this.correctCredentials.find(
          (cred) =>
            cred.email === enteredCreds.email &&
            cred.password === enteredCreds.password
        )
      ) {
        localStorage.setItem(
          'X-token',
          `${enteredCreds.email} + ${this.datePipe.transform(
            new Date(),
            'yyyy-MM-dd'
          )}`
        );
        observer.next(true);
        observer.complete();
      }
      observer.error(false);
      observer.complete();
    });
  }

  /** Check if the user is currently logged in */
  public isLoggedIn() {
    if (localStorage.getItem('X-token')) return true;
    return false;
  }

  /** Logout current user */
  public logOut() {
    localStorage.removeItem('X-token');
    localStorage.removeItem('CITIES');
    localStorage.removeItem('SELECTED_DAY');
    localStorage.removeItem('SELECTED_DAY_HOURLY_DATA');
    localStorage.removeItem('SELECTED_DAY_INDEX');
  }
}
