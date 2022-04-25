import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    document.body.classList.add('dark-theme');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('dark-theme');
  }
}
