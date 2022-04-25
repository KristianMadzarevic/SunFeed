import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    //Hardcoded some login info for demonstration without BE
    if (this._authService.isLoggedIn()) return true;
    //If the user is not logged in
    this.router.navigate(['/auth/login']);
    return false;
  }
}
